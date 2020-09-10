import {
  ADD_BLOG, DELETE_BLOG, ADD_COMMENT,
  DELETE_COMMENT, LOAD_TITLES, GET_BLOG
} from './actionTypes'
import uuid from 'uuid/v4'

const INITIAL_DATA = {
  blogs: {},
  titles: []
}

//alternate way to organize our state:
// state: {
//   blogs: {
//     1: {blog details}}
//   },
//   comments: {
//     a: {blog: 1, text: text for the comment}
//     b: {blog: 1, text: text for the second comment}
//   }
// }
/**
 * State: {blogs: {blogId: {id, title, description, body, comments: [{id, text}]}}}
 * 
 * Actions:
 *  - Add Blog (also handles blog edits)
 *  - Delete Blog
 *  - Add Comment
 *  - Delete Comment
 *  
 */
function rootReducer(state = INITIAL_DATA, action) {
  switch (action.type) {

    case GET_BLOG: {
      let blog = action.payload
      console.log("got blog", blog)

      return {
        ...state, blogs: { ...state.blogs, [blog.id]: blog }
      }
    }

    case LOAD_TITLES: {
      return {
        ...state, titles: action.payload
      }
    }

    case ADD_BLOG: {
      let { id, blog } = action.payload

      if (!id) id = uuid()

      return {
        ...state, blogs: { ...state.blogs, [id]: blog }
      }
    }

    case DELETE_BLOG: {
      const id = action.payload

      const blogCopy = { ...state.blogs }
      delete blogCopy[id]

      return {
        ...state, blogs: blogCopy
      }
    }

    case ADD_COMMENT: {
      const { comment, blogId } = action.payload

      const newComment = { ...comment, id: uuid() }
      const blog = state.blogs[blogId]
      // const comments = state.blogs[blogId].comments
      // const updatedComments = [...comments, newComment]

      //In the return, need to spread each level before proceeding, until reaching desire value to change (newComment)
      return {
        ...state, blogs: { ...state.blogs, [blogId]: { ...blog, comments: [...blog.comments, newComment] } }
      }
    }

    case DELETE_COMMENT: {
      const { blogId, commentId } = action.payload

      const comments = state.blogs[blogId].comments
      const newComments = comments.filter(comment => comment.id !== commentId)
      const blog = state.blogs[blogId]

      return {
        ...state, blogs: { ...state.blogs, [blogId]: { ...blog, comments: newComments } }
      }
    }

    default:
      return state;
  }
}
export default rootReducer
