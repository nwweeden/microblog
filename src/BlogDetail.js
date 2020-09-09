import React from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import {useParams} from 'react-router-dom'


function BlogDetail(){

  const blogId = useParams()

  return(
    <div>
      <h3>This is the blog detail page</h3>
      <Blog blogId={blogId}/>
      <BlogForm blogId={blogId}/>
    </div>
  )
}

export default BlogDetail