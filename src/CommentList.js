import React from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'

function CommentList({ comments, postId }) {

  // blogs(obj of obj { id: {title, description, post, comments: [{id: 'c1', text: 't2'}, {}])

  const renderComments = comments.length > 0 ? 
    comments.map(comment =>
      <Comment key={comment.id} comment={comment}  postId={postId} />) :
    null

  // const commentsAsArray = Object.entries(comments)
  // commentsAsArray.sort((a, b) => b.date - a.date)
  // const renderComments = Object.entries(comments).map(([key, value]) => (
  //   <li>
  //     {value}
  //   </li>
  // ))

  return (<div>
    <ul>
      {renderComments}
    </ul>
    <CommentForm postId={postId} />
  </div>
  )
}

export default CommentList