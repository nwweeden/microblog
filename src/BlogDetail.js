import React, { useState } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { useParams, Link } from 'react-router-dom'
import CommentList from './CommentList'


function BlogDetail({ blogs, deleteBlog, addBlog, deleteComment}) {

  const [isEditing, setIsEditing] = useState(false)
  const { postId } = useParams()

  const blog = blogs[postId]

  function handleEdit() {
    setIsEditing(true)
  }

  function handleDelete() {
    deleteBlog(postId)
  }

  const blogDetailDisplay = isEditing ? <BlogForm blog={blog} id={postId} addBlog={addBlog}/> :
    <>
      <Blog blog={blog} />
      <button onClick={handleEdit}>Edit</button>
      <Link to='/'> <button onClick={handleDelete}>Delete</button></Link>
    </>

  return (
    <div>
      {blogDetailDisplay}
      <CommentList comments={blog.comments} deleteComment={deleteComment} postId={postId}/>
    </div>
  )
}

export default BlogDetail