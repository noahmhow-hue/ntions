import { getAllPosts } from './blogData';
import Newsletter from '../Newsletter/Newsletter';
import './Blog.css';

function Blog() {
  const posts = getAllPosts();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-page">
      <header className="blog-header">
        <a href="/" className="blog-back">← Back to Home</a>
        <h1>Blog</h1>
        <p>Insights on AI, automation, and building smarter businesses.</p>
      </header>

      <div className="blog-container">
        <div className="blog-grid">
          {posts.map((post) => (
            <a href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
              <span className="blog-category">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}</span>
              </div>
            </a>
          ))}
        </div>

        <aside className="blog-sidebar">
          <Newsletter />
        </aside>
      </div>
    </div>
  );
}

export default Blog;
