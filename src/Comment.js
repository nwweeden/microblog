import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteComment} from './actions'
/**
 * Renders a single comment
 * 
 * App --> {Navbar,
 *  Routes --> {
 *    Homepage --> {BlogList-->Blog},
 *    BlogDetails--> {Blog, CommentList --> {Comment, CommentForm}, BlogForm},
 *    NewBlog --> {BlogForm}}}
 * 
 * Props:
 *  - comment: obj with comment info
 *  - blogId 
 * 
 * State:
 * - none
 */
function Comment({comment, blogId}){
  const dispatch = useDispatch()

  function handleDelete(){
    dispatch(deleteComment(blogId, comment.id))
  }
  
  return (
    <li>
      {comment.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Comment