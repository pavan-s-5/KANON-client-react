import "./header_Style.scss";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/Context";
import { LuSearch } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { RiMenu4Line } from "react-icons/ri";
import Cart from "../cart/Cart";
import Search from "./search/Search";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { cartCount } = useContext(Context);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleResize = () => {
    setShowMenu(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    if (window.innerWidth < 768) {
      setShowMenu(true);
    }else{
      setShowMenu(false)
    }
  };

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="left" onClick={() => navigate("/")}>
            <img src="../../../public/Kanon-logo.png" alt="kanon logo" />
            <span>Kanon</span>
          </div>

          {showMenu ? (
              <RiMenu4Line className="hamburger-menu" 
              onClick={() => setShowMenu(!showMenu)} 
              />
          ) : (
            // Render regular navigation for viewport 768px and above
            <ul className="center">
              <li className={location.pathname === '/' ? 'active' : ''} onClick={() => {navigate("/"); handleNavLinkClick();}}>Home</li>
              <li className={location.pathname === '/about' ? 'active' : ''} onClick={() => {navigate("/about");  handleNavLinkClick();}}>About</li>
              <li className={location.pathname === '/contactus' ? 'active' : ''} onClick={() => {navigate("/contactus");  handleNavLinkClick();}}>Contact Us</li>
            </ul>
          )}

          <div className="right">
            <LuSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />

            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <TiShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>

      {showCart && <Cart setShowCart={setShowCart} />}

      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
