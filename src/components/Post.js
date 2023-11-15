import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {/* Add more details like author, date, etc. */}
    </div>
  );
}

export default Post;
