import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { addComment } from './actions'

/**
 * Renders a comment form
 * 
 * App --> {Navbar,
 *  Routes --> {
 *    Homepage --> {BlogList-->Blog},
 *    BlogDetails--> {Blog, CommentList --> {Comment, CommentForm}, BlogForm},
 *    NewBlog --> {BlogForm}}}
 * 
 * Props:
 *  - blogId: string of blog's id
 * 
 * State:
 * - none
 */
function CommentForm({blogId}){
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
    dispatch(addComment(formData, blogId))
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