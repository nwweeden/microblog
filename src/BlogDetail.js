import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { useParams, Link, useHistory } from 'react-router-dom'
import CommentList from './CommentList'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlogInAPI, getPostFromAPI } from './actions'

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
  console.log('Beginning BlogDetail')
  const dispatch = useDispatch()
  const history = useHistory()

  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { blogId } = useParams()

  useEffect(() => {
    async function getPost() {
      await dispatch(getPostFromAPI(blogId))
      console.log('about to set loading to false!')
      setIsLoading(false)
    }
    getPost()

  }, [dispatch, blogId]);

  const blogs = useSelector(store => store.blogs)
  const blog = blogs[blogId]

  function handleEdit() {
    setIsEditing(true)
  }

  async function handleDelete() {
    await dispatch(deleteBlogInAPI(blogId))
    history.push("/")
  }

  function blogDetailDisplay() {
    if (isEditing) {
      return (
        <BlogForm blog={blog} edit={true}/>
      )
    } else {
      return (
        <>
          <Blog blog={blog} />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <CommentList comments={blog.comments} blogId={blogId} />
        </>
      )
    }
  }
  return (
    <div className="BlogDetail">
      {isLoading || !blog ? <h2>Loading...</h2> : blogDetailDisplay()}
    </div>
  )
}

export default BlogDetail