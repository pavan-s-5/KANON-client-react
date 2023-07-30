import "./cart_Style.scss";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiShoppingBagBold } from "react-icons/pi";
import { MdAddShoppingCart } from "react-icons/md";
import CartItem from "./cartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/Context";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";
import { useNavigate } from "react-router-dom";


const Cart = ({ setShowCart }) => {
  const navigate = useNavigate();
  const { cartItems, cartSubtotal } = useContext(Context);

  const stripePromise = loadStripe(
    import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise; 
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-pannel">
      <div className="opacity-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">
            <PiShoppingBagBold /> Shopping Cart
          </span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <IoIosCloseCircleOutline />
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <MdAddShoppingCart />
            <span>Your Kanon Cart is empty.</span>
            <button className="continue-shopping" onClick={() => {navigate('/'); setShowCart(false); }}>Shop Now</button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal : </span>
                <span className="text total"> &#8377; {cartSubtotal} </span>
              </div>
              <div className="button" onClick={handlePayment}>
                <button className="checkout-cta">Proceed to Buy</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
