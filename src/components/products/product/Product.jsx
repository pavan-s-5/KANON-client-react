import './product_Style.scss'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Product = ({id, data}) => {

  const formattedPrice = data?.price.toLocaleString('en-IN') // this is for adding comma to differentiate thousands and lakhs
  const navigate = useNavigate()

  return (
    <div className='product-card' onClick={() => navigate(`/product/${id}`)}>
        <div className="thumbnail">
            <img src={import.meta.env.VITE_REACT_APP_DEV_URL + data.image.data[0].attributes.url} alt="" />
        </div>

        <div className="product-details"> 
        <span className="name">{data.title}</span>
        <span className="price"> &#8377; {formattedPrice}</span>
        </div>
    </div>
  )
}

export default Product