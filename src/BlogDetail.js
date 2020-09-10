import React, { useState } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { useParams, Link } from 'react-router-dom'
import CommentList from './CommentList'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlog } from './actions'


function BlogDetail() {
  const blogs = useSelector(store => store.blogs)
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const { postId } = useParams()

  const blog = blogs[postId]

  function handleEdit() {
    setIsEditing(true)
  }

  function handleDelete() {
    dispatch(deleteBlog(postId))
  }

  const blogDetailDisplay = isEditing ? <BlogForm blog={blog} id={postId} />
    :
    <>
      <Blog blog={blog} />
      <button onClick={handleEdit}>Edit</button>
      <Link to='/'> <button onClick={handleDelete}>Delete</button></Link>
      <CommentList comments={blog.comments} postId={postId} />
    </>
  //keep comments and remove add delete functions ?
  return (
    <div className="BlogDetail">
      {blogDetailDisplay}
    </div>
  )
}

export default BlogDetail