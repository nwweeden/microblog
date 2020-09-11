import {ADD_OR_EDIT_BLOG, DELETE_BLOG, ADD_COMMENT, 
  DELETE_COMMENT, LOAD_TITLES, GET_BLOG} from './actionTypes'
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
    console.log('We deleted from the database')
    dispatch(deleteBlog(blogId))
  }
}

function deleteBlog(blogId){
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