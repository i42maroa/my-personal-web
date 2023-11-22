import emailjs from '@emailjs/browser'
import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm () {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', user_message: '' })

  const handleChange = (event:any) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event:any) => {
    event.preventDefault()
    const id = 'service_l8afvph'
    const templateId = 'template_pb7xl9l'
    const publicKey = 'PTbPZyQDA6HdARA-H'
    event.preventDefault()

    emailjs.sendForm(id, templateId, event.target, publicKey)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input className={styles.input} type='text' id='name' name='user_name' placeholder='Nombre contacto' value={formData.user_name} onChange={handleChange} />
      <input className={styles.input} type='email' id='email' name='user_email' placeholder='Email' value={formData.user_email} onChange={handleChange} />
      <textarea className={styles.textarea} id='message' name='user_message' placeholder='Mensaje' value={formData.user_message} onChange={handleChange} />

      <button className={styles.formButton} type='submit'>Submit</button>
    </form>
  )
}
