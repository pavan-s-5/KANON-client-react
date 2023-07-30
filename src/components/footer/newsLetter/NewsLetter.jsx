import "./newsLetter_Style.scss";
import React, { useState, useEffect, useRef } from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // emailjs :

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_EMAILJS_NEWSLETTER_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_EMAILJS_NEWSLETTER_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset()
          toast.success("You have sucessfully subscribed to our newsletter!", {
            position: "top-center",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Sorry! Failed to Subscribe. Please try again later.", {
            position: "top-center",
          });
        }
      );
  };

  useEffect(() => {
    const handleRezise = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleRezise);
    return () => window.removeEventListener("resize", handleRezise);
  }, []);

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">News Letter</span>
        <span className="big-text">
          Sign up for latest updates and offers from Top Brand's
        </span>

        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="user_email"
            />
            <button type="submit" value="Send">
              {screenWidth < 768 ? <MdSend /> : "Subscribe"}
            </button>
          </form>
        </div>
        <ToastContainer position="top-center" theme="colored" />

        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <div className="social-icons">
          <div className="icons">
            <BiLogoFacebookSquare />
            <FaTwitter />
            <BsInstagram />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
