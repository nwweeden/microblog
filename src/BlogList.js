import React, { useEffect, useState } from 'react';
import Blog from './Blog'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { getTitlesFromAPI } from "./actions.js"
/**
 * Renders a list of blogs
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
 *  - From Redux: Blog detail
 */
function BlogList() {
  console.log('ENTERED BLOGLIST')
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  
  //titles havn't change when the use Selecgtor checks becasue the API is responding 
  // faster with get titles than deleting
  const titles = useSelector(store => store.titles, shallowEqual)
  // const titles = useSelector(store => store.titles, deepEqual)
  const postLen = useSelector(store => Object.keys(store.blogs).length)
  
  useEffect(() => {
    async function getTitles() {
      await dispatch(getTitlesFromAPI())
      console.log('WEVE GOTTEN THE TITLES')
      setIsLoading(false)
    }
    getTitles()
  }, [dispatch]);

  // CR:would include a 'blog' in the url
  const renderTitles = titles.map(title => (
      <Blog key = {title.id} blog={title} isBlogList={true} />
  ))
  //TODO : isBlogList={true} ?


  return (
    <div className="BlogList">
      <h3>BlogList</h3>
      {isLoading ? <h2>Loading...</h2> : renderTitles}
    </div>
  )
}

export default BlogList