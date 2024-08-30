import DownloadSVG from "../../svgIcons/Download";
import option from "../../assets/icons/option.png";
import avatar from "../../assets/icons/profile.jpg";
import finanace from "../../assets/icons/finance.png";
import { StackBar } from "../../components/charts/StackBar";
import Form from "../wizard/Form";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Dashboard() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="wrapper-box">
      <div className="dashboard-wrapper">
        <div className="updated-dashboard-section">
          <div className="left-bar">
            <div className="top-heading">
              <h3>Jane Iyre [Fund Manager PE]</h3>
              <div className="button-grp">
                <button>
                  Export Report <DownloadSVG />
                </button>
                {/* <button>
                    This Month <DownloadSVG />
                  </button> */}
              </div>
            </div>
            <div className="calculate-section">
              <div className="col-box">
                <div className="top-col">
                  <div className="name-fund">
                    <div className="avatar">
                      <img src={finanace} alt="company" />
                    </div>
                    <div className="avatar-detail">
                      <label>Name</label>
                      <span>Fund PE</span>
                    </div>
                  </div>
                </div>
                <div className="btm-col">
                  <label className="roi-col">
                    <b>IRR</b> + 3.9%
                  </label>
                  <span>Fund Target Sizes (USD MN)</span>
                  <b>+$120,000</b>
                </div>
              </div>

              <div className="col-box clr-pattern">
                <div className="top-col">
                  <div className="name-fund">
                    <div className="avatar">
                      <img src={finanace} alt="company" />
                    </div>
                    <div className="avatar-detail">
                      <label>Strategy</label>
                      <span>Fund PE</span>
                    </div>
                  </div>
                </div>
                <div className="btm-col">
                  <label className="roi-col">
                    <b>IRR</b> + 2.9%
                  </label>
                  <span>Fund Target Sizes (USD MN)</span>
                  <b>+$10,000</b>
                </div>
              </div>

              <div className="col-box clr-pattern-1">
                <div className="top-col">
                  <div className="name-fund">
                    <div className="avatar">
                      <img src={finanace} alt="company" />
                    </div>
                    <div className="avatar-detail">
                      <label>Target Size (USD MN)</label>
                      <span>Fund PE</span>
                    </div>
                  </div>
                </div>
                <div className="btm-col">
                  <label className="roi-col">
                    <b>IRR</b> + 4.9%
                  </label>
                  <span>Fund Target Sizes (USD MN)</span>
                  <b>+$420,000</b>
                </div>
              </div>
            </div>
          </div>
          <div className="right-bar">
            <StackBar borderRadius1={20} borderRadius2={20} stacked={false} />
          </div>
        </div>
      </div>
      <div className="dashboard-wrapper">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-4 col-xxl-5 full-width">
              <div className="growth-section">
                <div className="title">
                  <h3>Growing Business Section</h3>
                  <button>View all</button>
                </div>
                <div className="chart-option">
                  <StackBar
                    borderRadius1={0}
                    borderRadius2={0}
                    stacked={true}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xxl-3 half-width">
              <div className="internal-profile">
                <div className="avatar-box">
                  <div className="avt-img">
                    <img src={avatar} />
                  </div>
                  <div className="avatar-dtl">
                    <h6>Paggam</h6>
                    <label>Founder of Storylane</label>
                    <p>"Make a millon valution in 2025</p>

                    <a href="#" className="more-option">
                      <img src={option} alt="company" />
                    </a>
                  </div>
                </div>
                <div className="our-achivements">
                  <label>Our Achivements</label>
                  <ul>
                    <li>
                      Bachlor of Arts/Sciences, The Wharton schools of the
                      University of Pennsylvannia
                    </li>
                    <li>Forbes 30 under 30 finanace Topic</li>
                    <li>Get C serices funding just 1 year</li>
                    <li>Visionary Vanguard</li>
                  </ul>
                </div>
                <div className="uprgade-section">
                  <label>Search and send message to founders</label>
                  <button onClick={toggle}>Upgrade</button>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xxl-4 half-width">
              <div className="discover-startup">
                <div className="title">
                  <h3>Discover another startup</h3>
                  <button>View all</button>
                </div>
                <div className="list-of-startup">
                  <div className="start-up-box">
                    <div class="fund-avatar">
                      <div className="start-up-logo">
                        <img src={finanace} alt="company" />
                      </div>
                      <div className="start-up-name">
                        <label>Eisai</label>
                        <p>Eisai Co.Ltd</p>
                      </div>
                    </div>
                    <div className="fund-amount">
                      <div className="start-up-funding">
                        <span>$10,50,20</span>
                        <label>Total funding</label>
                      </div>
                      <div className="domain-name">Healthcard</div>
                    </div>
                  </div>
                  <div className="start-up-box">
                    <div class="fund-avatar">
                      <div className="start-up-logo">
                        <img src={finanace} alt="company" />
                      </div>
                      <div className="start-up-name">
                        <label>Eisai</label>
                        <p>Eisai Co.Ltd</p>
                      </div>
                    </div>
                    <div className="fund-amount">
                      <div className="start-up-funding">
                        <span>$10,50,20</span>
                        <label>Total funding</label>
                      </div>
                      <div className="domain-name">Healthcard</div>
                    </div>
                  </div>
                  <div className="start-up-box">
                    <div class="fund-avatar">
                      <div className="start-up-logo">
                        <img src={finanace} alt="company" />
                      </div>
                      <div className="start-up-name">
                        <label>Eisai</label>
                        <p>Eisai Co.Ltd</p>
                      </div>
                    </div>
                    <div className="fund-amount">
                      <div className="start-up-funding">
                        <span>$10,50,20</span>
                        <label>Total funding</label>
                      </div>
                      <div className="domain-name">Food</div>
                    </div>
                  </div>
                  <div className="start-up-box">
                    <div class="fund-avatar">
                      <div className="start-up-logo">
                        <img src={finanace} alt="company" />
                      </div>
                      <div className="start-up-name">
                        <label>Eisai</label>
                        <p>Eisai Co.Ltd</p>
                      </div>
                    </div>
                    <div className="fund-amount">
                      <div className="start-up-funding">
                        <span>$10,50,20</span>
                        <label>Total funding</label>
                      </div>
                      <div className="domain-name">Healthcard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modal}
        toggle={toggle}
        fullscreen
        className="performance-modal"
      >
        <ModalHeader toggle={toggle}>Performance Assessment Wizard</ModalHeader>
        <ModalBody className="Performance-name">
          <Form />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Dashboard;
