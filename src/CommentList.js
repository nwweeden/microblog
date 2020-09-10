import React from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'

/**
 * Renders a list of comments
 * 
 * App --> {Navbar,
 *  Routes --> {
 *    Homepage --> {BlogList-->Blog},
 *    BlogDetails--> {Blog, CommentList --> {Comment, CommentForm}, BlogForm},
 *    NewBlog --> {BlogForm}}}
 * 
 * Props:
 *  - Comments: array of comments
 *  - blogId: string of blog's id
 * 
 * State:
 * - none
 */
function CommentList({ comments, blogId }) {

  const renderComments = comments.length > 0 ? 
    comments.map(comment =>
      <Comment key={comment.id} comment={comment}  blogId={blogId} />) : null

      //TODO: remove ULs - Don't need the Uls if there are no commemtns
  return (<div>
    <ul>
      {renderComments}
    </ul>
    <CommentForm blogId={blogId} />
  </div>
  )
}

export default CommentList