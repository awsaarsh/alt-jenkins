import React, { useState } from "react";
import arrowRightUp from "../../../assets/landing/arrow-up-right.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Features = props => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [altModal, setaltModal] = useState(false);
    const altToggle = () => setaltModal(!altModal);

    const [aptlyModal, setaptlyModal] = useState(false);
    const aptlyToggle = () => setaptlyModal(!aptlyModal);

    const [transparentModal, settransparentModal] = useState(false);
    const transparentToggle = () => settransparentModal(!transparentModal);
    return (
        <div className="feature-wrapper" id="Why-atl">
            <div className="container">
                <div className="header-container">
                    <h2>Why Alt?</h2>
                    <p>Instilling a better way of storytelling</p>
                </div>
            </div>
            <div className="container feature-box">
                <div className="left-f-bar">
                    <p>Our tailored benchmarking platform ensure precise, apple-to-apple comparisons for relevant assessments of risk and rewards.</p>
                    <ul>
                        <li>Are you still comparing your VC performance against the S&P500 instead of a small or mid cap index, thereby understating your performance and overstating your risk?</li>
                        <li>Are you factoring in fees in your comparison with a passive benchmark?</li>
                        <li>Are you comparing by adding a fixed premium against the index?</li>
                    </ul>
                    <p>Alt Indices eliminates these concerns, ensuring your benchmarks align with your investment goals. Choose customized benchmarks for a strategic edge in your investment journey!</p>
                    <div className="ft-section">
                        <label>Tailored Benchmarking <br />Solutions</label>
                        <a onClick={toggle}><img src={arrowRightUp} alt="Why Alt?" /></a>
                    </div>
                </div>
                <div className="right-f-bar">
                    <div className="l-feature-box">
                        <div className="top-box">
                            <p>Intuitive user-friendly interface for self-assessment and stakeholder engagement.</p>
                            <div className="ft-section">
                                <label>Aptly<br />Aligned</label>
                                <a onClick={aptlyToggle}><img src={arrowRightUp} alt="Why Alt?" /></a>
                            </div>
                        </div>
                        <div className="bottom-box">
                            <p>Deliver a comprehensive outlook through a combination of complementary data and insightful visualizations.</p>
                            <div className="ft-section">
                                <label>Comprehensive<br />Insights</label>
                                <a onClick={altToggle}><img src={arrowRightUp} alt="Why Alt?" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="r-feature-box">
                        <p>Alt Indices stands out by adhering to global standards like the IOSCO financial benchmarks framework, setting a new standard for reliability and transparency in private market benchmarking. Our service aligns incentives, eliminating biases in performance reporting.</p>
                        <div className="ft-section">
                            <label>Transparent Performance Metrics  </label>
                            <a onClick={transparentToggle}><img src={arrowRightUp} alt="Why Alt?" /></a>
                        </div>
                    </div>
                </div>
            </div>

            { /* Left Modal */}
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>Tailored Benchmarking Solutions</ModalHeader>
                <ModalBody>
                    <div className="iframe-wrapper">
                        <iframe className="iframe-container" loading="lazy" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFNfjhaI-8&#x2F;Ocv09SuSWvHBwF53BAHJGQ&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                        </iframe>
                    </div>
                    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFNfjhaI-8&#x2F;Ocv09SuSWvHBwF53BAHJGQ&#x2F;view?utm_content=DAFNfjhaI-8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Website Whats Wrong?</a> by Paigaam Dhaliwal
                    <br /> <br />
                </ModalBody>
            </Modal>

            { /* right Modal */}
            <Modal isOpen={altModal} toggle={altToggle} centered>
                <ModalHeader altToggle={altToggle}>Comprehensive Insights</ModalHeader>
                <ModalBody>
                    <div className="iframe-wrapper">
                        <iframe loading="lazy" className="iframe-container"
                            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-sT8zVAY&#x2F;NsxxckZuMAMON2atZNiFuA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                        </iframe>
                    </div>
                        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-sT8zVAY&#x2F;NsxxckZuMAMON2atZNiFuA&#x2F;view?utm_content=DAF-sT8zVAY&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Website - Comprehensive Insights</a> by Paigaam dhaliwal
                        <br/> <br/>
                </ModalBody>
            </Modal>

            { /* right Modal */}
            <Modal isOpen={aptlyModal} toggle={aptlyToggle} centered>
                <ModalHeader aptlyToggle={aptlyToggle}>Aptly Aligned</ModalHeader>
                <ModalBody>
                    <div className="iframe-wrapper">
                        <iframe loading="lazy" className="iframe-container"
                            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-saOfNlU&#x2F;67TXHOcC7duik6IlndYBfw&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                        </iframe>
                        </div>
                        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-saOfNlU&#x2F;67TXHOcC7duik6IlndYBfw&#x2F;view?utm_content=DAF-saOfNlU&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Website - Aptly Aligned</a> by Paigaam dhaliwal
                        <br /> <br />
                   
                </ModalBody>
            </Modal>


            { /* right Modal */}
            <Modal isOpen={transparentModal} toggle={transparentToggle} centered>
                <ModalHeader transparentToggle={transparentToggle}>Transparent Performance Metrics
                </ModalHeader>
                <ModalBody>
                    <div className="iframe-wrapper">
                        <iframe loading="lazy" className="iframe-container"
                            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-sezMliM&#x2F;DqKzFF6nKh1swfGz3ZqmDA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                        </iframe>
                        </div>
                        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-sezMliM&#x2F;DqKzFF6nKh1swfGz3ZqmDA&#x2F;view?utm_content=DAF-sezMliM&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Website - Transparent Performance Metrics</a> by Paigaam dhaliwal
                        <br /> <br />
                    
                </ModalBody>
            </Modal>
        </div>
    );
}
export default Features;
