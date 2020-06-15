import React, { useState, useEffect } from 'react';
import config from '../config';

const BlogPost = ({ match, blogPosts }) => {
  const [blogPost, setBlogPost] = useState(undefined);

  useEffect(() => {
    const blogPostTitle = unescape(match.params.blogPostTitle).replace(/_/g, ' ');
    const blogPostDetails = blogPosts.find((blogPostInList) => (
      blogPostInList.itemName.toLowerCase() === blogPostTitle.toLowerCase()
    ));
    setBlogPost(blogPostDetails);
  }, [match.params.blogPostTitle, blogPosts]);

  return (
    <div>
      {blogPost && (
        <>
          <h1>{blogPost.itemName}</h1>
          <p>{blogPost.itemDescription}</p>
          <div className="blog-posts">
            {blogPost.photos.map((photo) => (
              <div className="blog-post" key={photo.photoName}>
                <img
                  className="blog-post-img"
                  src={`${config.cloudfrontURL}/${photo.photoName}`}
                  alt={blogPost.itemName}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPost;
