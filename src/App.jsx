import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Category from "./components/category/Category";
import SingleProduct from "./components/singleProduct/SingleProduct";
import NewsLetter from "./components/footer/newsLetter/NewsLetter";
import AppContext from "./utils/Context";
import About from "./components/header/about/About";
import {slides, sellImage} from './components/header/about/testimonial.json'
import ContactUs from "./components/footer/contactUsform/ContactUs";
import PrivacyPolicy from "./components/footer/privacyPolicy/PrivacyPolicy";
import TermsOfUse from "./components/footer/termsOfUse/TermsOfUse";
import OrderSucess from "./components/orderSucessPage/OrderSucess";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/privacypolicy/:id" element={<PrivacyPolicy />} />
          <Route path="/termsofuse/:id" element={<TermsOfUse />} />
          <Route path="/about" element={<About data={slides} sellImage={sellImage} />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/success" element={<OrderSucess />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
