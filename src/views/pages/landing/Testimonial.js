import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import AboutImg from "../../../assets/landing/about-us.svg";
import ratingStar from "../../../assets/landing/ratings.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <div className='testimonial-wrap' id='what-we-do'>
      <div className="header-section">
        <label>Instilling a better way of storytelling</label>
        <h3>Convert Complex Information into Compelling Narratives with ease</h3>
        <p>Our platform is designed to help you effectively address key questions and seamlessly convert information into investor confidence.</p>
      </div>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <div className='testimonial-section'>
              <div className='client-name'>
                <h3>Have we earned enough to meet our financial objectives ?</h3>
                <label>Return Objective Benchmarking</label>
                <p>Assesses whether the fund has earned enough to meet financial objectives. Users can compare actual returns with target returns and inflation metrics for a real return assessment over a long period.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial-section'>
              <div className='client-name'>
                <h3>Have we outperformed a mix of indexes that represents our long-term strategic asset allocation?</h3>
                <label>Portfolio Policy Benchmark</label>
                <p>Assesses outperformance against a mix of indices representing long-term strategic asset allocation.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial-section'>
              <div className='client-name'>
                <h3>How have we performed on a risk-adjusted basis?</h3>
                <label>Dispersion of Return</label>
                <p> Examines performance dispersion within asset classes, highlighting risks and opportunities in alternative assets.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial-section'>
              <div className='client-name'>
                <h3>Was the decision to allocate capital to private investments a good one?</h3>
                <label>PME Benchmarks</label>
                <p>Evaluate your performance against a public benchmark with similar attributes to compute Alpha.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial-section'>
              <div className='client-name'>
                <h3>Have we added value through our selection of active managers? </h3>
                <label>Manager Benchmarks</label>
                <p>Assess performance by comparing it against a combination of each manager's specific benchmark, considering their respective weights within the portfolio.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial-section'>
              <div className='client-name'>
                <h3>Did we make good allocation decisions across strategies, sectors, geographies, and vintages?</h3>
                <label>Customized Benchmarks</label>
                <p>Custom-weighted benchmarks to perform "what if" analysis under different allocation scenarios and across strategic groups.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial-section'>
              <div className='client-name'>
                <h3>Have we outperformed other similar institutions?</h3>
                <label>Peer Benchmarks</label>
                <p>Evaluate your performance against a custom group of peers with similar attributes.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='testimonial-section'>
              <div className='client-name'>
                <h3>Have we done better than a simple, investable & passive approach?</h3>
                <label>Model Portfolio Benchmark</label>
                <p>Evaluates pool performance against a traditional 60/40 portfolio. Offers customization based on investment constraints and the investable universe, providing flexibility for different equity and fixed-income allocations.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Testimonial;