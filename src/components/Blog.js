import React from 'react';
import config from '../config';

const Blog = ({ blogPosts }) => (
  <div>
    <h1>Blog</h1>
    <div className="blog-posts">
      {blogPosts.map((blogPost) => (
        <a
          key={blogPost.itemId}
          href={escape(`/blog/${blogPost.itemName.replace(/ /g, '_').toLowerCase()}`)}
          className="blog-post"
        >
          <img
            src={`${config.cloudfrontURL}/${blogPost.photos[0].photoName}`}
            alt={blogPost.itemName}
            className="program-img"
          />
          <h3>{blogPost.itemName}</h3>
        </a>
      ))}
    </div>
  </div>
);

export default Blog;
