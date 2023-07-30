import './Home_Style.scss'
import React, { useContext, useEffect } from 'react'
import Banner from './banner/Banner'
import Products from '../products/Products'
import Categories from './categories/Categories'
import {fetchDataFromApi} from '../../utils/api'
import { Context } from '../../utils/Context'

const Home = () => {

 const {categories, setCategories, products, setProducts} = useContext(Context)
  useEffect(() => {
    getProducts()
    getCategories()
  },[])


  const getCategories = () => {
    fetchDataFromApi('/api/categories?populate=*').then(res => {
      // console.log(res)
      setCategories(res)
    }
      );
  }
  
  const getProducts = () => {
    fetchDataFromApi('/api/products?populate=*').then(res => {
      // console.log(res)
      setProducts(res)
    }
      );
  }

  return (
    <div>
      <Banner />

      <div className="main-content">

        <div className="layout">

        <Categories categories={categories}/>

        <Products 
        headingText='Popular Products'
        products={products}
        />

        </div>
        
      </div>
    </div>
  )
}

export default Home


