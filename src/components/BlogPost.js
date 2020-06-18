import React, { useState } from 'react';
import moment from 'moment';
import config from '../config';

const BlogPost = ({ blogPost }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="blog-post">
      <img
        src={`${config.cloudfrontURL}/${blogPost.photos[0].photoName}`}
        alt={blogPost.itemName}
        className="blog-post-img"
      />
      <h2 className="blog-post-title">{blogPost.itemName}</h2>
      <p className="blog-post-date">{moment(blogPost.datePublished).format('MMMM D, YYYY')}</p>
      <div
        className={`blog-post-content${expanded ? '' : ' collapsed'}`}
        dangerouslySetInnerHTML={{ __html: blogPost.itemHtml }}
      />
      {!expanded && (
        <p className="read-more" onClick={() => setExpanded(true)}>
          Read more
          <i className="fas fa-angle-down" />
        </p>
      )}
    </div>
  );
};

export default BlogPost;
