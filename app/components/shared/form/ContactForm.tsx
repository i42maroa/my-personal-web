import emailjs from '@emailjs/browser'
import { useState } from 'react'
import styles from './ContactForm.module.css'
import startAnimation from '@/hook/startAnimation'

export default function ContactForm () {
   interface FormInterface {
    user_name:string, user_email:string, user_message:string
  }
   const EMPTY_FORM:FormInterface = { user_name: '', user_email: '', user_message: '' }
   const [formData, setFormData] = useState(EMPTY_FORM)
   const [disable, setDisabled] = useState(true)
   const [showSendedModal, setSendedModal] = useState(false)

   const handleChange = (event:any) => {
     const { name, value } = event.target

     const newFormValue = { ...formData, [name]: value }
     setFormData(newFormValue)
     setValid(newFormValue)
   }

   const handleSubmit = (event:any) => {
     event.preventDefault()
     const id = 'service_l8afvph'
     const templateId = 'template_pb7xl9l'
     const publicKey = 'PTbPZyQDA6HdARA-H'
     setDisabled(true)
     setSendedModal(false)

     emailjs.sendForm(id, templateId, event.target, publicKey)
       .then(response => {
         console.log(response)
         setFormData(EMPTY_FORM)
         setDisabled(true)
         setSendedModal(true)
       })
       .catch(error => console.log(error))
   }

   const isNotValid = (value:string) => {
     return !value || value === ''
   }

   const isEmailNotValid = (email:string) => {
     return isNotValid(email) || !email.includes('@')
   }

   const markInputEmailStrokeBad = () => {
     return isEmailNotValid(formData.user_email) && formData.user_email !== '' ? { outline: '3px solid #f00', background: 'var(--form-fill-background)', color: 'var(--form-fill-color)' } : styleIfIsFilled(formData.user_email)
   }

   const setValid = (formData:FormInterface) => {
     const isInvalid = isNotValid(formData.user_name) || isEmailNotValid(formData.user_email) || isNotValid(formData.user_message)
     setDisabled(isInvalid)
   }

   const styleIfIsFilled = (field:string) => {
     return field === '' ? {} : { background: 'var(--form-fill-background)', color: 'var(--form-fill-color)' }
   }

   return (
     <form className={styles.formContainer} onSubmit={handleSubmit}>
       <label>
         <span>Tu nombre:</span>
         <input style={styleIfIsFilled(formData.user_name)} className={styles.input} type='text' id='name' name='user_name' placeholder='Perico de los palotes' value={formData.user_name} onChange={handleChange} required autoComplete='off' />
       </label>
       <label>
         <span>Tu email:</span>
         <input style={markInputEmailStrokeBad()} className={styles.input} type='email' id='email' name='user_email' placeholder='pericodelospalotes@gmail.com' value={formData.user_email} onChange={handleChange} required autoComplete='off' />
       </label>
       <label>
         <span>Tu mensaje:</span>
         <textarea style={styleIfIsFilled(formData.user_message)} className={styles.textarea} id='message' name='user_message' placeholder='Me gustaría proponerte...' value={formData.user_message} onChange={handleChange} required />
       </label>

       <button className={styles.formButton} type='submit' disabled={disable}>Enviar</button>

       <div className={`${styles.modal} ${startAnimation(showSendedModal, styles.modalAnimation)}`}>
         <span>Enviado correctamente</span>
       </div>
     </form>
   )
}
