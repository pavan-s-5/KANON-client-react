import "./contactUs_Style.scss";
import React, { useRef } from "react";
import {RiMailSendLine} from 'react-icons/ri'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify'



const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      )

      .then((result) => {
          console.log(result.text);
          form.current.reset()
          toast.success('Form submitted successfully!', {
            position: 'top-center'
          });
      }, (error) => {
          console.log(error.text);
          toast.error('Sorry! Failed to submit form. Please try again later.', {
            position: "top-center"
          });
      });
  };


  return (
    <div className="main-container">
      <div className="contact-us-container">
        <h2>Contact Us - Order Help, Returns and refund or General Inquiries</h2>
        <h3>
          <span> Have a question? </span>
          Fill out the below form with your message and we will contact you
        </h3>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="f-l-name">
            <input type="text" placeholder="first name" required name="user_firstname"/>
            <input type="text" placeholder="last name" required  name="user_lastname"/>
          </div>

          <input type="email" name="user_email"
          placeholder="Your email : example@gmail.com" 
          required  
          />

          <input type="tel" placeholder="+91 1234567891" pattern="[0-9]{10}" required name="user_contactnumber"/>
          <input type="text" placeholder="subject"  maxLength="200" required name="subject" />
          <textarea
          name="message"
          required
            cols="30"
            rows="10"
            placeholder="Hello! Describe your message here. . ."
          ></textarea>
          
          <div className="submit-button">
            <button type="submit" value='Send'> <RiMailSendLine /> Send</button>
          </div>

        </form>
        <ToastContainer position="top-center" theme="colored"/>
      </div>
    </div>
  );
};

export default ContactUs;



