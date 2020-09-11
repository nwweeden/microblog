import {ADD_OR_EDIT_BLOG, DELETE_BLOG, ADD_COMMENT, 
  DELETE_COMMENT, LOAD_TITLES, GET_BLOG, VOTE} from './actionTypes'
import axios from "axios";
const BASE_URL = 'http://localhost:5000/api/'

//actions for redux
//Get all titles
export function getTitlesFromAPI() {
  return async function(dispatch) {
    let res = await axios.get(`${BASE_URL}posts/`);
    dispatch(gotTitles(res.data));
  };
}


function gotTitles(titles) {
  return { 
    type: LOAD_TITLES,
     payload : titles 
    }
}

//get a single blog detail
export function getPostFromAPI(id){
  return async function(dispatch){
    // dispatch(loadingBlog)
    console.log('started to get post')
    let res = await axios.get(`${BASE_URL}posts/${id}`)
    console.log('finished to get post')
    // dispatch(loadedBlog)
    dispatch(gotBlog(res.data))
  }
}

function gotBlog(blog){
  return {
    type : GET_BLOG,
    payload : blog
  }
}

//post a blog
export function addBlogToAPI(blog){
  return async function (dispatch){
    let res = await axios.post(`${BASE_URL}posts`, blog)
    dispatch(addBlog(res.data))
  }
}

function addBlog(blog){
  return {
    type : ADD_OR_EDIT_BLOG,
    payload : blog
  }
}

//Edit a blog
export function editBlogInAPI(blog){
  return async function (dispatch){
    let res = await axios.put(`${BASE_URL}posts/${blog.id}`, blog)
    dispatch(editBlog(res.data))
  }
}

function editBlog(blog){
  return {
    type : ADD_OR_EDIT_BLOG,
    payload : blog
  }
}

//Delete blog

export function deleteBlogInAPI(blogId){
  return async function (dispatch){
    await axios.delete(`${BASE_URL}posts/${blogId}`)
    // console.log('We deleted from the database')
    dispatch(deleteBlog(blogId))
  }
}

function deleteBlog(blogId){
  return {
    type : DELETE_BLOG,
    payload : blogId
  }
}

export function AddCommentToAPI(comment, blogId){
  return async function (dispatch){
    let res = await axios.post(`${BASE_URL}posts/${blogId}/comments`, comment)
    dispatch(addComment(res.data, blogId))
  }
}

 function addComment(comment, blogId){
  return {
    type : ADD_COMMENT,
    payload : {comment, blogId}
  }
}

export function deleteCommentInAPI(commentId, blogId){
  return async function (dispatch){
   await axios.delete(`${BASE_URL}posts/${blogId}/comments/${commentId}`)
    // console.log('We deleted from the database')
    dispatch(deleteComment(commentId, blogId))
  }
}

 function deleteComment(commentId, blogId){
  return {
    type : DELETE_COMMENT,
    payload : {blogId, commentId}
  }
}

//either change the direction to a boolean or validate so it's less error prone
export function voteInAPI(blogId, direction){
  // console.log("inside voteInAPI &  blogId : ", blogId, direction)
  // console.log("url : ", `${BASE_URL}posts/${blogId}/vote/${direction}`)
  
  return async function (dispatch){
    // console.log("url in return : ", `${BASE_URL}posts/${blogId}/vote/${direction}`)
  
    let res = await axios.post(`${BASE_URL}posts/${blogId}/vote/${direction}`)
    dispatch(vote(blogId, res.data.votes))
  }
}

 function vote(blogId, votes){
  return {
    type : VOTE,
    payload : {blogId, votes}
  }
}
