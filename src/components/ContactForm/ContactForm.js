import React from 'react'
import axios from 'axios'
import './ContactForm.css'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, subject, message } = e.target.elements
    try {
      const response = await axios.post('http://localhost:8000/api/contact', {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      })

      console.log(response.data) // Optionally handle the response from the server

      setFormStatus('Submitted')
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('Error')
    }
  }
  return (
    <div class='card' id='card'>
      <div className='container mt-5'>
        <h2 className='mb-3'> Contact Us</h2>
        <p>For any query or isssue mail us</p>
        <form onSubmit={onSubmit}>
          <div className='mb-4 text-start'>
            <label className='form-label ' htmlFor='name'>
              Name
            </label>
            <input className='form-control' type='text' id='name' required />
          </div>
          <div className='mb-3 text-start'>
            <label className='form-label' htmlFor='email'>
              Email
            </label>
            <input className='form-control' type='email' id='email' required />
          </div>
          <div className='mb-3 text-start'>
            <label className='form-label' htmlFor='email'>
              Subject
            </label>
            <input className='form-control' type='text' id='subject' required />
          </div>
          <div className='mb-3 text-start '>
            <label className='form-label' htmlFor='message'>
              Message
            </label>
            <textarea className='form-control ' id='message' required />
          </div>
          <button className='btn btn-danger' type='submit'>
            {formStatus}
          </button>
        </form>
        <br></br>
      </div>
    </div>
  )
}
export default ContactForm
