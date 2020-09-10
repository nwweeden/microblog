import React from 'react';
import Blog from './Blog'
import {Link} from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'

function BlogList(){
  const blogs = useSelector(store => store.blogs, shallowEqual)

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