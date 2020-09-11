import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addBlogToAPI, editBlogInAPI } from './actions'

/**
 * Renders a blogform for adding/editing blogs
 * 
  * App --> {Navbar,
 *  Routes --> {
 *    Homepage --> {BlogList-->Blog},
 *    BlogDetails--> {Blog, CommentList --> {Comment, CommentForm}, BlogForm},
 *    NewBlog --> {BlogForm}}}
 * 
 * Props:
 *  - single blog detail, id of blog
 * 
 * State:
 *  - Form input
 */
function BlogForm({ blog = {title: '', description: '', body: ''}, edit=false}) {
  const history = useHistory()
  const dispatch =useDispatch()

  const [formData, setFormData] = useState(blog);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    edit ?
      await dispatch(editBlogInAPI(formData)) :
      await dispatch(addBlogToAPI(formData))

    history.push("/")
  }

  return (
    <div className="BlogForm">

      <form onSubmit={handleSubmit}>

        <label htmlFor='title'>Title:</label>
        <input name='title' value={formData.title} onChange={handleChange} />

        <label htmlFor='description'>Description:</label>
        <input name='description' value={formData.description} onChange={handleChange} />

        <label htmlFor='body'>Body:</label>
        <input name='body' value={formData.body} onChange={handleChange} />

        <button >Save</button>

      </form>
      <Link to="/"><button>Cancel</button></Link>
    </div>
  );
}

export default BlogForm