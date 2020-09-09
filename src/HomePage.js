import React from 'react';
import BlogList from './BlogList'

function Homepage({blogs}){
  return(
    <div>
      <h3>Homepage</h3>
      <BlogList blogs={blogs}/>
    </div>
  )
}

export default Homepage