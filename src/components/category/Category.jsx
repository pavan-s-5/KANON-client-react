import './category_Style.scss'
import React from 'react'
import Products from '../products/Products'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Category = () => {

  const {id} = useParams();
  console.log(id)

  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)


  return (
    <div className='category-main-content'>
      <div className="layout">
        <div className="category-title">
          {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
        </div>
        <Products 
          innerTitle={true}
          products={data}
        />
      </div>
    </div>
  )
}

export default Category

/*
in the given link http://localhost:5173/category/2 👈id)
in order to access the id that is 2 in react we have useParams from 'react-router-dom'
in order to get the data as per the category from the CMS for example : camera category and the data related to camera , tripod category and the data related to the tripod we use useParams from react-router-dom that specifically renders data as per the category listed in the CMS

*/