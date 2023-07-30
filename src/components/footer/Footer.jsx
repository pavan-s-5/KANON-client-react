import "./footer_Style.scss";
import React, { useContext, useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/Context";
import { fetchDataFromApi } from "../../utils/api";


const Footer = () => {
  const navigate = useNavigate();
  const { categories, setCategories, pdata } = useContext(Context);

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to Kanon, your personalized shopping destination, where
            every click is tailored to cater to your unique style and
            preferences. <br /> <br />
            Embrace the beauty of seamless browsing and discover a collection
            carefully selected just for you. Indulge in a haven of bespoke
            fashion, where your satisfaction is our priority. Start exploring
            and let Kanon transform the way you shop online."
          </div>
        </div>

        <div className="col">
          <div className="title">Contact Us</div>

          <div className="c-item">
            <GrLocation />
            <div className="text">Bengaluru, Karanataka, India - 560090</div>
          </div>

          <div className="c-item">
            <BsFillTelephoneFill />
            <div className="text">+91 1234567891</div>
          </div>

          <div className="c-item">
            <AiOutlineMail />
            <div className="text">pavansgowda500@gmail.com</div>
          </div>

          <span className="text" onClick={() => navigate(`/contactus`)}>Drop your message - Contact Us</span>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          {categories?.data?.map((item) => (
            <span
              key={item.id}
              className="text"
              onClick={() => navigate(`/category/${item.id}`)}
            >
              {item.attributes.title}
            </span>
          ))}
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text" onClick={() => navigate("/")}> Home </span>
          <span className="text" onClick={() => navigate("/about")}> About </span>
          <span className="text" onClick={() => navigate(`/privacypolicy/${pdata?.data[0]?.id}`)}> Privacy Policy</span>
          <span className="text" onClick={() => navigate(`/termsofuse/${pdata?.data[0]?.id}`)}>Term of Use</span>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            Kanon - theCameraStore | Created by Pavan S - Copyrights &copy; All
            rights Reserved 2023
          </div>

          <img src={Payment} alt="payments img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

