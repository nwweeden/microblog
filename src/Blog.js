import React from 'react';
import { voteInAPI } from './actions';
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
/**
 * Renders a single blog
 * 
 * App --> {Navbar,
 *  Routes --> {
 *    Homepage --> {BlogList-->Blog},
 *    BlogDetails--> {Blog, CommentList --> {Comment, CommentForm}, BlogForm},
 *    NewBlog --> {BlogForm}}}
 * 
 * Props:
 *  - Blog: Object with blog details
 *  - isBlogList: Boolean indicating if this Blog is for the
 *    BlogList or BlogDetails
 * 
 * State:
 *  - Handled in redux
 */
function Blog({ blog, isBlogList }) {
  const dispatch = useDispatch()
  // console.log("blog", blog)
  
  async function handleVote(evt) {
    const direction = evt.target.id

    await dispatch(voteInAPI(blog.id, direction))
  }

  function displayBlogCardOrTitle() {
    const buttons = <h4>Votes : {blog.votes}
      <button id="up" onClick={handleVote}>UP</button>
      <button id="down" onClick={handleVote}>DOWN</button>
    </h4>

    const titleAndDescription = <>
      <h2>{blog.title}</h2>
      <h4>{blog.description}</h4>
    </>

    if (isBlogList) {
      return (
        <>
          <Link to={`/${blog.id}`}>
            {titleAndDescription}
          </Link>
          {buttons}
        </>
      )
    } else {
      return (<>
        {titleAndDescription}
        <h2>{blog.body}</h2>
        {buttons}
      </>)
    }
  }

  return (
    <div className="Blog">
      {displayBlogCardOrTitle()}
    </div>
  )
}
//TODO:try to get rid of isBlogList
export default Blog