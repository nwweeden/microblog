import {
  ADD_OR_EDIT_BLOG, DELETE_BLOG, ADD_COMMENT,
  DELETE_COMMENT, LOAD_TITLES, GET_BLOG, VOTE
} from './actionTypes'
import { voteInAPI } from './actions'

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

      return {
        ...state, blogs: { ...state.blogs, [blog.id]: blog }
      }
    }

    case LOAD_TITLES: {
      return {
        ...state, titles: action.payload
      }
    }

    case ADD_OR_EDIT_BLOG: {
      let blog = action.payload

      return {
        ...state, blogs: { ...state.blogs, [blog.id]: blog }
      }
    }

    // case EDIT_BLOG: {
    //   let blog = action.payload

    //   ...state, blogs: { ...state.blogs, [blog.id]: blog }

    // }

    //TODO: WHy do we have to delete titles manually? Arnt we awaiting?
    case DELETE_BLOG: {
      const id = action.payload

      const blogCopy = { ...state.blogs }
      const titleCopy = [ ...state.titles ]

      delete blogCopy[id]
      const resultTitles = titleCopy.filter(title => title[id] !== id)

      return {
        ...state, blogs: blogCopy, titles: resultTitles
      }
    }

    case ADD_COMMENT: {
      const { comment, blogId } = action.payload

      const blog = state.blogs[blogId]
      
      return {
        ...state, blogs: { ...state.blogs, [blogId]: { ...blog, comments: [...blog.comments, comment] } }
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

    case VOTE: {
      const { blogId, votes } = action.payload
      // console.log("blogId and votes", blogId, votes)
      
      const blog = state.blogs[blogId]

      const resultTitles = state.titles.map(title => {
        const newTitle = {...title}
        if(newTitle.id === blogId){
          newTitle.votes = votes
        }
        return newTitle
      })

      return {
        ...state, blogs: { ...state.blogs, [blogId]: { ...blog, votes: votes } },
        titles : resultTitles
      }
    }

    default:
      return state;
  }
}
export default rootReducer