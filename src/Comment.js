import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteComment} from './actions'

function Comment({comment, postId}){
  const dispatch = useDispatch()

  function handleDelete(){
    dispatch(deleteComment(postId, comment.id))
  }
  
  return (
    <li>
      {comment.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Comment