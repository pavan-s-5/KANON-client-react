import "./about_Style.scss";
import React, { useEffect, useState } from "react";
import img1 from "../../../assets/about/a1.jpg";
import img2 from "../../../assets/about/a2.jpg";
import img3 from "../../../assets/about/a3.jpg";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const About = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  // for auto slide
  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className="about-container">
      <div className="about-banner-1">
        <div className="about-banner-1-img">
          <img src={img1} alt="" />
        </div>
        <div className="about-banner-1-text">
          <h1>Your One-Stop Destination for Camera Enthusiasts</h1>
          <p>
            At Kanon, we're passionate about photography and committed to
            providing a seamless shopping experience for all camera enthusiasts.
            Whether you're a beginner or a seasoned pro, we have everything you
            need to capture life's precious moments in stunning detail.
          </p>
        </div>
      </div>

      <div className="about-banner-2">
        <div className="about-banner-2-text">
          <h1>Our Story</h1>
          <p>
            Our journey began with a shared love for photography and a dream of
            creating a hub where photographers, amateurs, and professionals
            alike could find the perfect gear. Pavan, a photography enthusiast
            and tech expert, founded Kanon in 2023 with the vision of making
            high-quality cameras and accessories accessible to everyone.
          </p>
        </div>

        <div className="about-banner-2-img">
          <img src={img2} alt="" />
        </div>
      </div>

      <div className="about-banner-3">
        <div className="about-banner-3-top-div">
          <h1>What we sell</h1>
          <p>
            Behind Kanon is a team of photography enthusiasts and industry
            professionals who are passionate about sharing their knowledge and
            helping you find the right equipment related to camera and
            accessories.
          </p>
        </div>

        <div className="about-banner-3-bottom-div">
          <img src={img3} alt="" />
          <img src={img3} alt="" />
          <img src={img3} alt="" />
          <img src={img3} alt="" />
          <img src={img3} alt="" />
          <img src={img3} alt="" />
          <img src={img3} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>

      <div className="about-banner-4">
        <h1>What Sets Us Apart?</h1>
        <p>
          Our commitment to excellence is what sets us apart from the rest. When
          you shop with us, you can expect: <br />
          Unrivaled Product Selection: From compact point-and-shoot cameras to
          professional DSLRs and mirrorless wonders, we've got it all. Plus, an
          extensive collection of lenses, tripods, camera bags, and more, so you
          can find everything you need in one place. <br />
          Expert Advice: Our team of photography enthusiasts and experts are
          always here to assist you. Whether you need help choosing the perfect
          camera or require technical advice, we've got you covered. <br />
          Customer Satisfaction Guarantee: Your satisfaction is our top
          priority. If you're not delighted with your purchase, we offer a
          hassle-free return policy to ensure you find the right gear with
          confidence.
        </p>
      </div>

      <div className="about-banner-5">
        <h1>
          Don't just take our word for it - Here's what some of our delighted
          customers have to say about their experience with Kanon
        </h1>

        <div className="testimonial">
          {/* <BsFillArrowLeftCircleFill
            className="arrow testimonial-left-arrow"
            onClick={previousSlide}
          /> */}

          {data.map((item, i) => {
            return (
              <div key={i} className={slide === i ? "slide" : "slide-hidden"}>
                <div className="img-name">
                  <img src={item.src} alt="" />
                  <span className="customer-name">{item.name}</span>
                </div>

                <div className="review">
                  <span className="stars">{item.review}</span>
                  <span className="review-location">{item.location}</span>
                  <span className="review-description">{item.description}</span>
                </div>
              </div>
            );
          })}

          {/* <BsFillArrowRightCircleFill
            className="arrow  testimonial-right-arrow"
            onClick={nextSlide}
          /> */}

          <span className="indicators">
            {data.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={
                    slide === i
                      ? "indicator-button"
                      : "indicator-button indicator-button-inactive"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      </div>

      <div className="about-banner-6">
        <div className="contact-us">
          
        </div>
      </div>
    </div>
  );
};

export default About;

