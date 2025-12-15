import { Resend } from 'resend';
import fs from 'fs';
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);

async function getSubscribers() {
  // In production, you'd fetch this from a database or API
  // For now, using test recipients from env
  const testRecipients = process.env.TEST_RECIPIENTS || '';
  return testRecipients.split(',').map(email => email.trim()).filter(Boolean);
}

function wrapInEmailTemplate(content, subject) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="color: #0066ff; font-size: 24px; margin: 0;">ntions</h1>
      <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Weekly AI Insights</p>
    </div>

    <!-- Content -->
    <div style="background-color: #111111; border-radius: 16px; padding: 32px; border: 1px solid rgba(255,255,255,0.05);">
      ${content}
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05);">
      <p style="color: #94a3b8; font-size: 12px; margin: 0;">
        You're receiving this because you subscribed to the ntions newsletter.
      </p>
      <p style="color: #94a3b8; font-size: 12px; margin-top: 8px;">
        <a href="https://ntions.com" style="color: #0066ff; text-decoration: none;">Visit ntions.com</a>
        &nbsp;|&nbsp;
        <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #94a3b8; text-decoration: none;">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

async function sendNewsletter() {
  // Load generated newsletter
  if (!fs.existsSync('latest-newsletter.json')) {
    console.error('No newsletter found. Run "npm run generate" first.');
    process.exit(1);
  }

  const newsletter = JSON.parse(fs.readFileSync('latest-newsletter.json', 'utf-8'));
  const subscribers = await getSubscribers();

  if (subscribers.length === 0) {
    console.error('No subscribers found. Add emails to TEST_RECIPIENTS in .env');
    process.exit(1);
  }

  console.log(`Sending newsletter to ${subscribers.length} subscriber(s)...`);
  console.log(`Subject: ${newsletter.subject}`);

  const html = wrapInEmailTemplate(newsletter.content, newsletter.subject);

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'newsletter@ntions.com',
      to: subscribers,
      subject: newsletter.subject,
      html: html,
      headers: {
        'X-Entity-Ref-ID': `newsletter-${Date.now()}`,
      },
    });

    if (error) {
      console.error('Failed to send:', error);
      process.exit(1);
    }

    console.log('\nNewsletter sent successfully!');
    console.log('Email ID:', data.id);

    // Archive the sent newsletter
    const archiveDir = 'archive';
    if (!fs.existsSync(archiveDir)) {
      fs.mkdirSync(archiveDir);
    }

    const date = new Date().toISOString().split('T')[0];
    fs.renameSync('latest-newsletter.json', `${archiveDir}/newsletter-${date}.json`);
    console.log(`Archived to ${archiveDir}/newsletter-${date}.json`);

  } catch (error) {
    console.error('Error sending newsletter:', error);
    process.exit(1);
  }
}

sendNewsletter();
