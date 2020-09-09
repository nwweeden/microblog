import React from 'react'

function Comment({comment, deleteComment, postId}){
  
  function handleDelete(){
    deleteComment(postId, comment.id)
  }
  
  return (
    <li>
      {comment.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Comment