import Anthropic from '@anthropic-ai/sdk';
import Parser from 'rss-parser';
import fs from 'fs';
import 'dotenv/config';

const parser = new Parser();
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// AI news sources
const RSS_FEEDS = [
  'https://techcrunch.com/category/artificial-intelligence/feed/',
  'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
  'https://venturebeat.com/category/ai/feed/',
  'https://news.mit.edu/rss/topic/artificial-intelligence2',
];

async function fetchNews() {
  console.log('Fetching AI news from RSS feeds...');
  const allArticles = [];

  for (const feedUrl of RSS_FEEDS) {
    try {
      const feed = await parser.parseURL(feedUrl);
      const recentArticles = feed.items.slice(0, 5).map(item => ({
        title: item.title,
        link: item.link,
        summary: item.contentSnippet || item.content?.substring(0, 300) || '',
        source: feed.title,
        date: item.pubDate,
      }));
      allArticles.push(...recentArticles);
    } catch (error) {
      console.warn(`Failed to fetch ${feedUrl}:`, error.message);
    }
  }

  // Sort by date and take most recent
  return allArticles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 15);
}

async function generateNewsletter(articles) {
  console.log('Generating newsletter with Claude...');

  const articleSummaries = articles
    .map(a => `- ${a.title} (${a.source})\n  ${a.summary}\n  Link: ${a.link}`)
    .join('\n\n');

  const prompt = `You are writing a weekly AI newsletter for "ntions", a company that helps businesses implement practical AI solutions.

The newsletter should be:
- Professional but approachable
- Focused on practical business implications
- Around 500-700 words
- Actionable and insightful

Here are this week's top AI news stories:

${articleSummaries}

Write a newsletter with:
1. A catchy subject line
2. A brief intro (2-3 sentences)
3. 3-4 key stories with your analysis of what they mean for businesses
4. A "Quick Takes" section with 2-3 brief observations
5. A closing that ties back to practical AI adoption

Format the output as JSON with this structure:
{
  "subject": "Subject line here",
  "preheader": "Email preview text (50 chars max)",
  "content": "Full HTML newsletter content"
}

Use clean HTML with inline styles for email compatibility. Use a dark theme (#0a0a0a background, #e0e7ff text, #0066ff accent).`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  const responseText = response.content[0].text;

  // Extract JSON from response
  const jsonMatch = responseText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Could not parse newsletter JSON from response');
  }

  return JSON.parse(jsonMatch[0]);
}

async function main() {
  try {
    const articles = await fetchNews();
    console.log(`Found ${articles.length} recent articles`);

    if (articles.length === 0) {
      console.log('No articles found. Exiting.');
      process.exit(1);
    }

    const newsletter = await generateNewsletter(articles);

    // Save to file for review/sending
    fs.writeFileSync(
      'latest-newsletter.json',
      JSON.stringify(newsletter, null, 2)
    );

    console.log('\nNewsletter generated successfully!');
    console.log(`Subject: ${newsletter.subject}`);
    console.log('\nSaved to latest-newsletter.json');
    console.log('Run "npm run send" to send the newsletter');
  } catch (error) {
    console.error('Error generating newsletter:', error);
    process.exit(1);
  }
}

main();
