import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

function BlogForm({ addBlog, blog }) {
  const history = useHistory()

  //TODO: will need to update initital form data based on how form is used
  const initialFormData = {
    id: blog.id,
    title: blog.title || '',
    description: blog.description || '',
    body: blog.body || '',
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
    addBlog(formData)
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