import React, { useState } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { useParams, Link } from 'react-router-dom'


function BlogDetail({ blogs, deleteBlog, addBlog}) {

  const [isEditing, setIsEditing] = useState(false)
  const { postId } = useParams()

  const blog = blogs.find(element =>  element.id === parseInt(postId))

  function handleEdit() {
    setIsEditing(true)
  }

  function handleDelete() {
    deleteBlog(postId)
  }

  const blogDetailDisplay = isEditing ? <BlogForm blog={blog} addBlog={addBlog}/> :
    <>
      <Blog blog={blog} />
      <button onClick={handleEdit}>Edit</button>
      <Link to='/'> <button onClick={handleDelete}>Delete</button></Link>
    </>

  return (
    <div>
      {blogDetailDisplay}
    </div>
  )
}

export default BlogDetail