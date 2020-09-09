import React from 'react';

function Blog({ blog, isBlogList }) {
  // console.log('single blog is:', blog)
  return (
    <div className="Blog">
      <h2>{blog.title}</h2>
      <h4>{blog.description}</h4>
      {isBlogList ? null : <p>{blog.body}</p>}
    </div>
  )
}

export default Blog