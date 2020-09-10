import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addBlog} from './actions'

//TODO: Ask if we should dispatch in parent component
function BlogForm({ blog, id }) {
  const history = useHistory()
  const dispatch =useDispatch()

  const initialFormData = blog ? {
    // id: blog.id,
    title: blog.title,
    description: blog.description,
    body: blog.body,
    comments : blog.comments
  } : {
    title: '',
    description: '',
    body: '',
    comments : []
  }

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(addBlog(formData, id))

    setFormData(initialFormData)
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

        {/* TODO: updated save and cancel links */}
        <button >Save</button>

      </form>
      <Link to="/"><button>Cancel</button></Link>
    </div>
  );
}

export default BlogForm