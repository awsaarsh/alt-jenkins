import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from "reactstrap";
import ALTSVG from "../../../svgIcons/Add copy";
import bannerImg from "../../../assets/landing/banner.svg";
import ratings from "../../../assets/landing/ratings.png";
import clientImg from "../../../assets/landing/cumbine-Image.png";


const Banner = props => {

    return (
        <div className="banner-wrap">            
                <div className="banner-container">
                <div className="left-bar">
                    <div className="inner-contain">               
                        <h2>Shaping the Future of <br/>
                        Investment Transparency, One <br /> Benchmark at a Time</h2>
                        <p>In the world of private market investments, navigating without a reliable yardstick can be challenging. Alt Indices addresses this gap, providing  transparent and standardized benchmark service tailored to the unique needs of the private market.</p>
                        <div className="subscribe-section">
                            <input type="text" placeholder="Enter email address" />
                            <button className="free-trial-btn">Sign up for Free Trial</button>
                        </div>
                    </div>
                </div>
                <div className="right-bar">
                    <img src={bannerImg} alt="company" />                 
                </div>
            </div>
        </div>
    );
};

export default Banner;