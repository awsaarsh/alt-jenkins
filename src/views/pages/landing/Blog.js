import React, { useState } from "react";
import AboutImg from "../../../assets/landing/group-img.png";
import blogImg from "../../../assets/landing/blog-img.png";
import blogImg1 from "../../../assets/landing/blog-img1.png";
import blogImg2 from "../../../assets/landing/blog-img2.png";

const Blog = props => {

    return (
        <div className="blog-wrapper">
            <div className="container">
                <div className="header-section">
                    <h3>Insights</h3>
                    <a href="https://altindices.com/insights/" className="view-btn">View More</a>
                </div>
                <div className="box-container">
                    <a href="https://altindices.com/wp/alt-indices-launches-hhi-benchmarks/" className="box">
                        <img src={blogImg} alt="company" />
                        <span className="overlay-text top-side">Alt Indices launches India’s first market concentration Indices</span>                                  
                    </a>
                    <a href="https://altindices.com/wp/sebi-relaxes-compliance-requirement-for-performance-benchmarking-of-aifs/" className="box">
                        <img src={blogImg1} alt="company" />
                        <span className="overlay-text top-side">Sebi relaxes compliance requirement for performance benchmarking of AIFs</span>                                  
                    </a>  
                    <a href="https://altindices.com/wp/sebi-proposes-mandatory-benchmarking-of-aifs-2/" className="box">
                        <img src={blogImg2} alt="company" />
                        <span className="overlay-text">SEBI proposes mandatory benchmarking of AIFs</span>                                  
                    </a>                  
                </div>                       
            </div>
        </div>
    );
};

export default Blog;
