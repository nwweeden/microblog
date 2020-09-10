import {ADD_BLOG, DELETE_BLOG, ADD_COMMENT, DELETE_COMMENT} from './actionTypes'

export function addBlog(blog, id){
  return {
    type : ADD_BLOG,
    payload : {blog, id}
  }
}

export function deleteBlog(blogId){
  return {
    type : DELETE_BLOG,
    payload : blogId
  }
}

export function addComment(comment, blogId){
  return {
    type : ADD_COMMENT,
    payload : {comment, blogId}
  }
}

export function deleteComment(blogId, commentId){
  return {
    type : DELETE_COMMENT,
    payload : {blogId, commentId}
  }
}