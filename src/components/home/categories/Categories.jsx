import "./categories_Style.scss";
import React from "react";
import {useNavigate} from 'react-router-dom'

const Categories = ({categories}) => {

  const navigate = useNavigate();

  // if (!categories || !categories.data) {
  //   // Handle the initial loading state or when data is not available yet
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="shop-by-category">
        <div className="category-title">Categories</div>

      <div className="categories">

      {categories?.data?.map((item) => (
        <div key={item.id} className="category" onClick={() =>  navigate(`/category/${item.id}`)}>
          <img src={import.meta.env.VITE_REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="category img" />
        </div>
      ))}

      </div>
    </div>
  );
};

export default Categories;
