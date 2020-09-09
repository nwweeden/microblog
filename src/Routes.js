import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import NewBlog from './NewBlog'
import BlogDetail from './BlogDetail'

/**
 * Renders all components
 * 
 * App --> {Navbar, Routes --> {Homepage, BlogDetails, NewBlog}}
 * 
 * Props:
 *  - blogs(obj of arrays [{title, description, post}])
 * 
 * State:
 *  
 */
function Routes({blogs, deleteBlog, addBlog}){
  return(
    <div className ='Router'>
      <Switch>
        <Route exact path='/'>
          <HomePage blogs={blogs}/>
        </Route>
        <Route exact path='/new'>
          <NewBlog addBlog={addBlog}/>
        </Route>
        <Route exact path='/:postId'>
          <BlogDetail blogs={blogs} deleteBlog={deleteBlog} addBlog={addBlog}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Routes