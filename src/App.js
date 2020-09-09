import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import uuid from 'uuid/v4'

/**
 * Renders all components
 * 
 * App --> {Navbar, Routes --> {Homepage, BlogDetails, NewBlog}}
 * 
 * Props:
 *  
 * 
 * State:
 *  - blogs(obj of obj { id: {title, description, body, comments: [{id: 'c1', text: 't2'}, {}])
 */
function App() {
  const dummyData = {'1': {title: "first blog", description: "first blog descp", body: "i dont know", comments: [{id: 'a', text:'first comment'}] }}
  const [blogs, setBlog] = useState(dummyData)

  function deleteBlog(blogId) {
    const blogCopy = {...blogs}
    delete blogCopy[blogId]
    setBlog(blogCopy)
  }

  function addBlog(blog, id) {
    if (!id) id = uuid()

    setBlog(blogs => {
        return {...blogs, [id]: blog }
      })
    }

  function deleteComment(postId, id){
    const comments = blogs[postId].comments
    const newComments = comments.filter(comment => comment.id !== id)
    setBlog({...blogs}, blogs[postId].comments = newComments)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes blogs={blogs} deleteBlog={deleteBlog} addBlog={addBlog} deleteComment={deleteComment}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
