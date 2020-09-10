import React from 'react';
/**
 * Renders a single blog
 * 
 * App --> {Navbar,
 *  Routes --> {
 *    Homepage --> {BlogList-->Blog},
 *    BlogDetails--> {Blog, CommentList --> {Comment, CommentForm}, BlogForm},
 *    NewBlog --> {BlogForm}}}
 * 
 * Props:
 *  - Blog: Object with blog details
 *  - isBlogList: Boolean indicating if this Blog is for the
 *    BlogList or BlogDetails
 * 
 * State:
 *  - Handled in redux
 */
function Blog({ blog, isBlogList }) {
  return (
    <div className="Blog">
      <h2>{blog.title}</h2>
      <h4>{blog.description}</h4>
      {/* {blog.body ?   <p>{blog.body}</p> : null} */}
      {isBlogList ? null : <p>{blog.body}</p>}
    </div>
  )
}
//TODO:try to get rid of isBlogList
export default Blog