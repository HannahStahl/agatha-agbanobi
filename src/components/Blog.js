import React from 'react';
import BlogPost from './BlogPost';

const Blog = ({ blogPosts }) => (
  <div>
    <div className="blog-posts">
      {blogPosts.map((blogPost) => <BlogPost key={blogPost.itemId} blogPost={blogPost} />)}
    </div>
  </div>
);

export default Blog;
