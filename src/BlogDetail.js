import React, { useState } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { useParams, Link } from 'react-router-dom'
import CommentList from './CommentList'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlog } from './actions'

/**
 * Renders blog detail, blogform to edit, and comment list
 * 
 * App --> {Navbar,
 *  Routes --> {
 *    Homepage --> {BlogList-->Blog},
 *    BlogDetails--> {Blog, CommentList --> {Comment, CommentForm}, BlogForm},
 *    NewBlog --> {BlogForm}}}
 * 
 * Props:
 *  -None
 * 
 * State:
 *  - Blog detail from redux
 */
function BlogDetail() {
  const blogs = useSelector(store => store.blogs)
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const { blogId } = useParams()

  const blog = blogs[blogId]

  function handleEdit() {
    setIsEditing(true)
  }

  function handleDelete() {
    dispatch(deleteBlog(blogId))
  }

  const blogDetailDisplay = isEditing ? <BlogForm blog={blog} id={blogId} />
    :
    <>
      <Blog blog={blog} />
      <button onClick={handleEdit}>Edit</button>
      <Link to='/'> <button onClick={handleDelete}>Delete</button></Link>
      <CommentList comments={blog.comments} blogId={blogId} />
    </>

  return (
    <div className="BlogDetail">
      {blogDetailDisplay}
    </div>
  )
}

export default BlogDetail