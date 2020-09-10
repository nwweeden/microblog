import React, {useState} from 'react'
import { useDispatch} from 'react-redux'

function CommentForm({ postId}){
  const dispatch = useDispatch()
  const initialData = {
    text : ''
  }
  const [formData, setFormData] = useState(initialData)

  function handleChange(evt){
    const {name, value} = evt.target
    setFormData(formData => ({
      ...formData,
      [name] : value
    }))
  }

  function handleSubmit(evt){
    evt.preventDefault()
    dispatch(addComment(formData, postId))
    setFormData(initialData)
  }

  return (
    <form onSubmit={handleSubmit} >
    <input type='text'
      name="text"
      value={formData.text}
      placeholder='New Comment'
      onChange={handleChange}
    />
  <button className="btn btn-primary">Add</button>
</form>
  )
}
export default CommentForm