import React from 'react';
import Blog from './Blog'
import {Link} from 'react-router-dom'

function BlogList({blogs}){
  //iterate over blogs to create all blogs
  //const blogDisplay = <Blog />

  const renderBlogs = blogs.map(blog => (
    <Link  key={blog.id} to={`/${blog.id}`}><Blog blog={blog} isBlogList={true}/></Link>
  ))

  return(
    <div className="BlogList">
      <h3>BlogList</h3>
      {renderBlogs}
    </div>
  )
}

export default BlogList