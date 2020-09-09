import React, {useState} from 'react';
import './App.css';
import NavBar from './NavBar'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';

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

  const [blogs, setBlog] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes blogs={blogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
