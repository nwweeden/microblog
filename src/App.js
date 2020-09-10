import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import uuid from 'uuid/v4'

/**
 * Renders all components
 * 
 * App --> {Navbar,
 *  Routes --> {
 *    Homepage --> {BlogList-->Blog},
 *    BlogDetails--> {Blog, CommentList --> {Comment, CommentForm}, BlogForm},
 *    NewBlog --> {BlogForm}}}
 * 
 * Props:
 *  
 * 
 * State:
 *  - Handled in redux
 */
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;