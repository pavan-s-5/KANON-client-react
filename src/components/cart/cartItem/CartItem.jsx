import "./cartItem_Style.scss";
import React, { useContext } from "react";
import cartProduct from "../../../assets/products/single-product-img.png";
import {RiDeleteBinLine} from 'react-icons/ri'
import { Context } from "../../../utils/Context";

const CartItem = () => {

  const {cartItems, handleCartProductQuantity, handleRemoveFromCart} = useContext(Context)


  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
        <div className="img-container">
          <img src={import.meta.env.VITE_REACT_APP_DEV_URL + item.attributes.image.data[0].attributes.url} alt="cart Item" />
        </div>

        <div className="product-details">
          <span className="product-name">{item.attributes.title}</span>
          <RiDeleteBinLine onClick={() => handleRemoveFromCart(item)}/>
          <div className="quantity-btns">
                <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                <span>{item.attributes.quantity}</span>
                <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
          </div> 
          <div className="text">
            <span> {item.attributes.quantity} </span>
            <span> X </span>
            <span className="highlight"> &#8377;{item.attributes.price * item.attributes.quantity}</span>
          </div>
        </div>
      </div>
      )) }
      
    
    </div>
  );
};

export default CartItem;
