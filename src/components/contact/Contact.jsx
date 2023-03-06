import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



  const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4xgesqg', 'template_pyz0v6m', form.current, '1SvDTsWU7K4fsb_Hs')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset()
    };

    return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <aricle className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dummy@gmail.com" target="_blank">Send a message</a>            
          </aricle>
          
          <aricle className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>tutorial</h5>
            <a href="https://m.me/ernest.achiever" target="_blank">Send a message</a>            
          </aricle>

          <aricle className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>whatsapp</h4>
            <h5>123456</h5>
            <a href="https://api.whatsapp.com/send?phone=+919304946935" target="_blank">Send a message</a>            
          </aricle>
          </div>

          {/* /* ======================== FORM ========================= */ }

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className="btn btn-primary">Send a message</button>
          </form>
        
      </div>
    </section>
  )
}

export default Contact