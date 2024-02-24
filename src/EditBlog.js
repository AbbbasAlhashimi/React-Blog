import React from 'react';
import { useLocation } from 'react-router-dom';

const EditBlog = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const blogUrl = searchParams.get('url');

  // Extracting blog id from URL
  const blogId = blogUrl.substring(blogUrl.lastIndexOf('/') + 1);

  return (
    <div className="edit-blog">
      <h2>Edit Blog</h2>
      <p>Editing Blog ID: {blogId}</p>
      {/* Add your edit form here */}
    </div>
  );
};

export default EditBlog;
