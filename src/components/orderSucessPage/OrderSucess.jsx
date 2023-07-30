import "./OrderSucess_Style.scss";
import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


const OrderSucess = () => {

  const navigate = useNavigate()

  return (
    <div className="success-main-container">
      <div className="sub-container">

        <div className="left" >
          <img src="../../../public/Kanon-logo.png" alt="kanon logo" />
          <span>Kanon</span>
        </div>

        <h3>
          Order Confirmation <GiConfirmed />
        </h3>
        <h4>Hello,</h4>
        <p>
          Thank you for shopping with us. We'd like to let you know that Kanon
          has received your order and is preparing it for shipement. Your
          estimated delivery date will be sent to your email addrerss. If you
          would like to get the status of your order or to make any changes to
          it, please fill out our contact form with the order details on
          Kanon.com and we will help you.
        </p>
        <div className="line-break"></div>
        <span>Shipping speed : Standard Shipping</span>
      </div>
    </div>
  );
};

export default OrderSucess;
