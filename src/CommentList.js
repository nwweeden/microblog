import React from 'react';
import Comment from './Comment'

function CommentList({ comments, deleteComment, postId}) {

  // blogs(obj of obj { id: {title, description, post, comments: [{id: 'c1', text: 't2'}, {}])

  const renderComments = comments.map(comment =>
  <Comment key={comment.id} comment={comment} deleteComment={deleteComment} postId={postId}/>)

// const commentsAsArray = Object.entries(comments)
// commentsAsArray.sort((a, b) => b.date - a.date)
// const renderComments = Object.entries(comments).map(([key, value]) => (
//   <li>
//     {value}
//   </li>
// ))

return (
  <ul>
    {renderComments}
  </ul>
)
}

export default CommentList