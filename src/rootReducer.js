import { ADD_BLOG, DELETE_BLOG, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'
import uuid from 'uuid/v4'

const INITIAL_DATA = {
  blogs: {
    '1':
    {
      title: "first blog",
      description: "first blog descp",
      body: "i dont know",
      comments: [
        { id: 'a', text: 'first comment' },
        { id: 'b', text: 'second comment' }
      ]
    }
  }
}

function rootReducer(state = INITIAL_DATA, action) {
  switch (action.type) {

    case ADD_BLOG:
      const { id, blog } = action.payload

      if (!id) id = uuid()

      return {
        blogs: { ...state.blogs, [id]: blog }
      }

    case DELETE_BLOG:
      const id = action.payload.blogId

      const blogCopy = { ...state.blogs }
      delete blogCopy[id]

      return {
        blogs: blogCopy
      }

    case ADD_COMMENT:
      const { comment, blogId } = action.payload

      const newComment = { ...comment, id: uuid() }
      const comments = state.blogs[blogId].comments
      const updatedComments = [...comments, newComment]

      return {
        blogs: { ...state.blogs, [state.blogs[blogId].comments]: updatedComments }
      }
    //TODO: Check if this right

    case DELETE_COMMENT:
      const { blogId, commentId } = action.payload

      const comments = state.blogs[blogId].comments
      const newComments = comments.filter(comment => comment.id !== commentId)

      return {
        blogs: { ...state.blogs, [state.blogs[blogId].comments]: newComments }
      }
    //TODO: Check if this right

  }
}
export default rootReducer