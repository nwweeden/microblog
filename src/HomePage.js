import React from 'react';
import BlogList from './BlogList'
/**
 * Renders the homepage
 * 
 * App --> {Navbar,
 *  Routes --> {
 *    Homepage --> {BlogList-->Blog},
 *    BlogDetails--> {Blog, CommentList --> {Comment, CommentForm}, BlogForm},
 *    NewBlog --> {BlogForm}}}
 * 
 * Props:
 *  
 * 
 * State:
 *  - Handled in redux
 */
function Homepage() {
  return (
    <div>
      <h3>Homepage</h3>
      <BlogList />
    </div>
  )
}

export default Homepage