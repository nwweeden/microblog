import {ADD_BLOG, DELETE_BLOG, ADD_COMMENT, 
  DELETE_COMMENT, LOAD_TITLES, GET_BLOG} from './actionTypes'
import axios from "axios";
const BASE_URL = 'http://localhost:5000/api/'

//actions for redux

export function getTitlesFromAPI() {
  return async function(dispatch) {
    let res = await axios.get(`${BASE_URL}posts/`);
    dispatch(gotTitles(res.data));
  };
}

// normal action creator & action
function gotTitles(titles) {
  return { 
    type: LOAD_TITLES,
     payload : titles 
    }
}

export function getPostFromAPI(id){
  console.log("inside getPostFromAPI with id :", id)
  return async function(dispatch){
    let res = await axios.get(`${BASE_URL}posts/${id}`)
    dispatch(gotBlog(res.data))
  }
}

function gotBlog(blog){
  return {
    type : GET_BLOG,
    payload : blog
  }
}
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