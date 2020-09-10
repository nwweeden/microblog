import React, { useEffect, useState } from 'react';
import Blog from './Blog'
import { Link } from 'react-router-dom'
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
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getTitles() {
      await dispatch(getTitlesFromAPI())
      setIsLoading(false)
    }
    getTitles()
  }, [dispatch]);

  const titles = useSelector(store => store.titles, shallowEqual)

  // CR:would include a 'blog' in the url
  const renderTitles = titles.map(title => (
    <Link key={title.id} to={`/${title.id}`}>
      <Blog blog={title} isBlogList={true} />
    </Link>
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