import React from 'react';
import Blog from './Blog'
import {Link} from 'react-router-dom'

function BlogList({blogs}){

  // console.log('blogs are:', blogs)
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