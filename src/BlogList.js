import React from 'react';
import Blog from './Blog'
import {Link} from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
/**
 * Renders a list of blogs
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
 *  - From Redux: Blog detail
 */
function BlogList(){
  const blogs = useSelector(store => store.blogs, shallowEqual)


// CR:would include a 'blog' in the url
  const renderBlogs = Object.entries(blogs).map(([key, value]) => (
    <Link key={key} to={`/${key}`}>
      <Blog blog={value} isBlogList={true}/>
    </Link>
  ))

  return(
    <div className="BlogList">
      <h3>BlogList</h3>
      {renderBlogs}
    </div>
  )
}

export default BlogList