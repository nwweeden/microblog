import React from 'react'
import { NavLink } from 'react-router-dom'
/**
 * Renders a nav bar
 * 
 * App --> {Navbar, Routes --> {Homepage, BlogDetails, NewBlog}}
 * 
 * Props:
 *  - none
 * 
 * State:
 *  - none
 */
function NavBar(){
  return(
    <div>
      <h1>MicroBlog</h1>
      <h4>Get in the Rithm of blogging!</h4>
      <NavLink exact to='/'>Blog</NavLink>
      <NavLink exact to='/new'>Add a new post</NavLink>
    </div>
  )
}

export default NavBar