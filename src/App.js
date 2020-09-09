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
 *  - blogs(obj of arrays [{title, description, post}])
 */
function App() {
  const dummyData = [{ id: 1, title: "first blog", description: "first blog descp", body: "i dont know" }]
  const [blogs, setBlog] = useState(dummyData)
  console.log("blogs state", blogs)

  function deleteBlog(blogId) {
    setBlog(blogs => blogs.filter(blog => (blog.id !== parseInt(blogId))))
  }

  function addBlog(newBlog) {
    if (!newBlog.id) {
      const newBlogWithId = { ...newBlog, id: uuid() }
      setBlog(blogs => [...blogs, newBlogWithId])
    } else {
      setBlog(blogs => blogs.map(element => {
        if (element.id === newBlog.id) return newBlog
        else return element
      }))
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes blogs={blogs} deleteBlog={deleteBlog} addBlog={addBlog} />
      </BrowserRouter>
    </div>
  );
}

export default App;
