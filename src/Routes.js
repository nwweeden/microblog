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
function Routes({blogs}){
  return(
    <div className ='Router'>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/new'>
          <NewBlog />
        </Route>
        <Route exact path='/:postId'>
          <BlogDetail />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes