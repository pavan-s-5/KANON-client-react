import "./search_Style.scss";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChnage = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(`/api/products?populate=*&[filters][title][$contains]=${query}`);

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products, Brands and More"
          value={query}
          onChange={onChnage}
        />

        <CgClose onClick={() => setShowSearch(false)} className="close-btn" />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div key={item.id} className="search-result-item" onClick={() => {
              navigate('/product/' + item.id) 
              setShowSearch(false)
              }}>
                
              <div className="img-container">
                <img src={import.meta.env.VITE_REACT_APP_DEV_URL + item.attributes.image.data[0].attributes.url} alt="cart Item" />
              </div>

              <div className="product-details">
                <span className="product-name">{item.attributes.title}</span>

                <span className="product-price">&#8377;{item.attributes.price.toLocaleString()}</span>

                <span className="product-mrp">
                  M.R.P
                  <span className="striked-price"> &#8377;{item.attributes.mrp.toLocaleString()} </span>
                  <span className="offer">({item.attributes.offer}% off)</span>
                </span>

                <span className="shipping">
                  <TbTruckDelivery />
                  Free Delivery by Kanon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
