import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteCommentInAPI} from './actions'
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

  async function handleDelete(){
    await dispatch(deleteCommentInAPI(comment.id, blogId))
  }
  
  return (
    <li>
      {comment.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Comment