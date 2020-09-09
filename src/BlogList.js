import React from 'react';
import Blog from './Blog'

function BlogList({blogs}){
  //iterate over blogs to create all blogs
  const blogDisplay = <Blog />
  return(
    <div>
      <h3>BlogList</h3>
      {blogDisplay}
    </div>
  )
}

export default BlogList