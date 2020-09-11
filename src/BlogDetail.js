import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { useParams, useHistory } from 'react-router-dom'
import CommentList from './CommentList'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
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

  const blogs = useSelector(store => store.blogs, shallowEqual)
  const blog = blogs[blogId]
  
  useEffect(function getBlogIfNoBlogComments() {
    let check = true;
    async function getPost() {
      await dispatch(getPostFromAPI(blogId))
      if (check) setIsLoading(false)
    }
    if(!blog || !blog.comments) getPost()
    else  setIsLoading(false)
    return function(){
      check = false;
    }
  }, [dispatch, blogId, blog]);


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