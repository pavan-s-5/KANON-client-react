import './products_Style.scss'
import React from 'react'
import Product from './product/Product'

const Products = ({products, innerTitle, headingText}) => {

  return (
    <div className='products-container'>
       {!innerTitle && <div className="section-heading">{headingText}</div>}

        <div className="products">
          {products?.data?.map((item)=>(
            <Product key={item.id} id={item.id} data={item.attributes} />
          ))}
        </div>
        
    </div>
  )
}

export default Products