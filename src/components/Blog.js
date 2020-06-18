import React from 'react';
import moment from 'moment';
import config from '../config';

const Blog = ({ blogPosts }) => (
  <div>
    <div className="blog-posts">
      {blogPosts.map((blogPost) => (
        <div key={blogPost.itemId} className="blog-post">
          <img
            src={`${config.cloudfrontURL}/${blogPost.photos[0].photoName}`}
            alt={blogPost.itemName}
            className="blog-post-img"
          />
          <h2>{blogPost.itemName}</h2>
          <p className="blog-post-date">{moment(blogPost.datePublished).format('MMMM D, YYYY')}</p>
          <div dangerouslySetInnerHTML={{ __html: blogPost.itemHtml }} />
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
