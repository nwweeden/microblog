import React, {useState} from 'react'

function BlogForm(){

  //TODO: will need to update initital form data based on how form is used
  const initialFormData = {
    title: '',
    description: '',
    body: '',
  }
  
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData( formData => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    //Update based on what is passed in
  }

  return (

    <form onSubmit={handleSubmit}>

      <label htmlFor='title'>Title:</label>
      <input name='title' value={formData.title} onChange={handleChange} />

      <label htmlFor='description'>Description:</label>
      <input name='description' value={formData.description} onChange={handleChange} />

      <label htmlFor='body'>Body:</label>
      <input name='body' value={formData.body} onChange={handleChange} />

      {/* TODO: updated save and cancel links */}
      <button>Save</button>
      <button>Cancel</button>
    </form>

  );
}

export default BlogForm