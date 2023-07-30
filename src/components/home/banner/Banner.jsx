import './banner_Style.scss'
import React from "react";
import BannerImg from '../../../assets/banner-img.png'
import {GiPhotoCamera} from 'react-icons/gi'


const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>
                        Best Deals
                        <span><GiPhotoCamera/></span>
                    </h1>
                    <p>
                    Discover the best-in-class <span> Camera's </span> & <span>Accessories </span> from top brands. <br /> Unleash your creativity with a wide selection of cutting-edge gear and unbeatable deals!
                    </p>
                    
                    <div className="ctas">  {/*  ctas is a class name and ctas = call to actions*/}
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div> {/* v2 means version 2*/}
                    </div>
                </div>
                <img className='banner-img' src={BannerImg} alt="bannerImg" />
            </div>
        </div>
    )
}

export default Banner;