import React from 'react'
import BlogForm from './BlogForm'

function NewBlog({addBlog}){
  return(
    <div>
      <h3>Make a new Blog</h3>
      <BlogForm addBlog={addBlog}/>
    </div>
  )
}

export default NewBlog