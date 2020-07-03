import React, { useEffect } from 'react';
import BlogPost from './BlogPost';

const Blog = ({ blogPosts }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="blog-posts">
        {blogPosts.map((blogPost) => <BlogPost key={blogPost.itemId} blogPost={blogPost} />)}
      </div>
    </div>
  );
};

export default Blog;
