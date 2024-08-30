import React, { useState } from "react";
import AboutImg from "../../../assets/landing/about-us.svg";
import TwitterSVG from "../../../svgIcons/Twitter";
import FbSVG from "../../../svgIcons/Fb";
import LinkdienSVG from "../../../svgIcons/Linkdien";
import InstagramSVG from "../../../svgIcons/Insta";
import ALTSVG from "../../../svgIcons/Add copy";
import MapSVG from "../../../svgIcons/MapIcon";
import VisitSVG from "../../../svgIcons/VisitIcon";
import MapIconSVG from "../../../svgIcons/MapIcon";
import VisitIconSVG from "../../../svgIcons/VisitIcon";

const Footer = props => {

    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="get-started">
                    <div className="text-line">
                        <h3>Let’s get started with ALT</h3>
                        <p>Join us and convert complex Information into compelling narratives with ease</p>
                    </div>
                    <a href="#" className="sign-up-btn">Sign Up</a>
                </div>
                <div className="f-data">
                    <div className="f-logo-section">
                        <ALTSVG />
                        <p>Convert information into investor confidence.</p>
                        <ul>
                            <li><a href="#"><LinkdienSVG /></a></li>
                        </ul>
                    </div>
                    <div className="f-menu">
                        <ul>
                            <h3>Company</h3>
                            <li><a href="https://altindices.com/">Home</a></li>
                            <li><a href="https://altindices.com/about-us/">About Us</a></li>
                            <li><a href="https://altindices.com/insights/">Insights</a></li>
                        </ul>
                        <ul>
                            <h3>Services</h3>
                            <li><a href="https://altindices.com/aif-benchmarking/">AIF Benchmarking</a></li>
                            <li><a href="https://altindices.com/hhi/banking/">Banking HHI</a></li>
                            <li><a href="https://altindices.com/hhi/insurance/">Insurance HHI</a></li>
                            <li><a href="https://altindices.com/hhi/telecom/">Telecom HHI</a></li>
                        </ul>
                        <ul>
                            <h3>Support</h3>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Help Center</a></li>
                        </ul>
                    </div>
                    <div className="contact-address">
                        <div className="contact-info">
                            <lable>Contact Us</lable>
                            <span><VisitIconSVG /><a href="mailto:info@altindices.com">info@altindices.com</a></span>
                        </div>
                        <div className="contact-info visit-website">
                            <lable>Visit Us</lable>
                            <span><MapIconSVG />Adelaide St E<br />Toronto, ON M5A 4S3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
