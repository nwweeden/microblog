import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import NewBlog from './NewBlog'
import BlogDetail from './BlogDetail'

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
 *  - None
 * 
 * State:
 *  - none
 */
function Routes(){
  return(
    <div className ='Router'>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/new'>
          <NewBlog />
        </Route>
        <Route exact path='/:blogId'>
          <BlogDetail />
        </Route>
        <Redirect to = '/'/>
      </Switch>
    </div>
  )
}

export default Routes