import "./singleProduct_Style.scss";
import React, { useState , useContext} from "react";
import { PiTruckFill } from "react-icons/pi";
import { BsCart4, BsBoxSeam , BsShieldCheck} from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { BiLock } from "react-icons/bi";
import RelatedProducts from "./relatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch'
import { Context } from "../../utils/Context";
 

const SingleProduct = () => {

  const [quantity, setQuantity] = useState(1)
  const {id} = useParams();  
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
  const {handleAddToCart} = useContext(Context)

  if(!data) return;
  const product = data.data[0].attributes
 
  const increment = () => {
    setQuantity((prev) => prev + 1)
  }
  const decrement = () => {
    setQuantity((prev) => {
      if(prev === 1){
        return 1
      }else {
        return prev-1
      }
    })
  }


  return (
    <div className="singleProduct-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={import.meta.env.VITE_REACT_APP_DEV_URL + product.image.data[0].attributes.url} alt="singleProductImg" />
          </div>

          <div className="right">
            <span className="product-name">
              {product.title}
            </span>

            <span className="divider" />

            <span className="product-price">

              <span className="price-section-1">
                  <span className="discount">-{product.offer}%</span>
                  <span className="rupee-entity-code">&#8377;</span> 
                  <span className="main-price">{product.price.toLocaleString('en-IN')}</span>
              </span>


             <span className="price-section-2">
                <span className="mrp-price">
                    M.R.P : <span className="striked-price"> &#8377;{product.mrp.toLocaleString('en-IN')} </span> 
                </span>

                <span className="tax-text">
                  Inclusive of all taxes
                </span>
             </span>


            </span>

            <span className="divider" />

            <span className="product-description">{product.description}</span>

            <div className="cart-buttons">
              <div className="quantity">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>

              <button className="add-to-cart-btn" onClick={() => {
                handleAddToCart(data.data[0], quantity)
                setQuantity(1)
                }}>
                <BsCart4 /> Add to Cart
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
            <span className="info-item-title">About this item</span>

              <span className="product-specification">
                <span className="product-specification-left"><pre>{product.leftabout}</pre></span>
                <span className="product-specification-right"><pre>{product.rightabout}</pre></span>   
            </span>

            <span className="divider" />

              <span className="text-bold payment-shipping-info">
                <span> <PiTruckFill/> Free Delivery</span>
                <span> <BsBoxSeam/> {product.replacement} days Replacement</span>
                <span> <BsShieldCheck />{product.warranty} Warranty</span>
                <span> <GoTrophy/> Top Brand </span>
                <span> <PiTruckFill/> Kanon Delivered</span>
                <span> <BiLock/> Secure Transaction</span>
              </span>

            </div>
          </div>
        </div>
        <RelatedProducts 
        productId={id}
        categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;


/*  leftabout
                  <span>   Category                            </span>
                  <span>   Brand                               </span>
                  <span>   Model Name                          </span>
                  <span>   Maximum Webcam Image Resolution     </span>
                  <span>   Photo Sensor Size                   </span>
                  <span>   Image Stabilisation                 </span>
                  <span>   Maximum Shutter Speed               </span>
                  <span>   Minimum Shutter Speed               </span>
                  <span>   Metering Description                </span>
                  <span>   Exposure Control Type               </span>
                  <span>   Form Factor                         </span>
                
      right about 

                        <span>   Mirrorless Camera </span>
                  <span>   Sony </span>
                  <span>   ILCE-7M4K </span>
                  <span>   33MP </span>
                  <span>   Full Frame (35mm) </span>
                  <span>   Optical, Sensor-shift </span>
                  <span>   1/8000 Seconds </span>
                  <span>   1/30 Seconds </span>
                  <span>   Center Weighted </span>
                  <span>   Automatic  </span>
                  <span>   Mirrorless </span>
*/