import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { useParams, Link } from 'react-router-dom'
import CommentList from './CommentList'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlog, getPostFromAPI } from './actions'

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
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { blogId } = useParams()

  useEffect(() => {
    async function getPost() {
      await dispatch(getPostFromAPI(blogId))
      setIsLoading(false)
    }
    getPost()

  }, [dispatch, blogId]);

  const blogs = useSelector(store => store.blogs)
  const blog = blogs[blogId]

  function handleEdit() {
    setIsEditing(true)
  }

  function handleDelete() {
    dispatch(deleteBlog(blogId))
  }

  function blogDetailDisplay() {
    if (isEditing) {
      return (
        <BlogForm blog={blog} id={blogId} />
      )
    } else {
      return (
        <>
          <Blog blog={blog} />
          <button onClick={handleEdit}>Edit</button>
          <Link to='/'> <button onClick={handleDelete}>Delete</button></Link>
          <CommentList comments={blog.comments} blogId={blogId} />
        </>
      )
    }
  }

  return (
    <div className="BlogDetail">
      {isLoading ? <h2>Loading...</h2> : blogDetailDisplay()}
    </div>
  )
}

export default BlogDetail