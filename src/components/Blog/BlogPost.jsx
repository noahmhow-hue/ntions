import { getPostBySlug, getAllPosts } from './blogData';
import Newsletter from '../Newsletter/Newsletter';
import NotFound from '../NotFound/NotFound';
import './Blog.css';

function BlogPost({ slug }) {
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts().filter(p => p.slug !== slug).slice(0, 2);

  if (!post) {
    return <NotFound />;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-page">
      <header className="blog-header blog-header-post">
        <a href="/blog" className="blog-back">← Back to Blog</a>
        <span className="blog-category">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="blog-container blog-container-post">
        <article className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <aside className="blog-sidebar">
          <Newsletter />

          {allPosts.length > 0 && (
            <div className="sidebar-section">
              <h3>More Articles</h3>
              {allPosts.map((p) => (
                <a href={`/blog/${p.slug}`} key={p.slug} className="sidebar-post">
                  <span className="sidebar-post-title">{p.title}</span>
                  <span className="sidebar-post-meta">{p.readTime}</span>
                </a>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default BlogPost;
