import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
import CloseFilterFVG from '../../svgIcons/CloseFilter';
import React, { useState } from 'react';
import AnnulizedFund from "../../assets/chart-image.jpeg";
import AnnulizedTwoFund from "../../assets/chart-img1.jpeg";
import DemoFourChart from '../../components/charts/DemoFour';

export default function Interquartile(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="wrapper-box">
      <h1 className="component-name">Interquartile Benchmark</h1>
      <div className="dashboard-wrapper">
        <div className="left-bar">
          <div className='card basic-info-wrap'>
            <div className="heading-name chat-date-board">
              <label>Chart information</label>
              <div className='action-btn'>
                <button className="edit-btn">Show on Dashboard</button>
              </div>
            </div>
            <div className="basic-detail">
            <DemoFourChart />
            </div>
          </div>
        </div>
        <div className="right-bar">
          <div className='card basic-info-wrap'>
            <div className="heading-name">
              <label>Customize</label>
              <button className='clear-filter-btn'><CloseFilterFVG />Clear</button>
            </div>
            <div className="basic-detail">

              <Row className='choose-asset'>
                <h3>Choose Assest Classes</h3>
                <Col md={12} className='box'>
                  <FormGroup
                    check
                    inline
                  >
                    <Input type="checkbox" />
                    <Label check>
                    Equity
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={12} className='box'>
                  <FormGroup
                    check
                    inline
                  >
                    <Input type="checkbox" />
                    <Label check>
                    Bonds
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={12} className='box'>
                  <FormGroup
                    check
                    inline
                  >
                    <Input type="checkbox" />
                    <Label check>
                    Real Assets
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={12} className='box'>
                  <FormGroup
                    check
                    inline
                  >
                    <Input type="checkbox" />
                    <Label check>
                    Private Assets
                    </Label>
                  </FormGroup>
                </Col>                
              </Row>

              <Row className='choose-period'>
                <h3>Select Period</h3>
                <Row>
                <Col md={6} className='box'>
                  <FormGroup
                    check
                    inline
                  >
                    <Input type="radio" />
                    <Label check>
                    10 Years
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={6} className='box'>
                  <FormGroup
                    check
                    inline
                  >
                    <Input type="radio"/>
                    <Label check>
                    15 Years
                    </Label>
                  </FormGroup>
                </Col>
                </Row>

                <Row>
                <Col md={6} className='box'>
                  <FormGroup
                    check
                    inline
                  >
                    <Input type="radio" />
                    <Label check>
                    20 Years
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={6} className='box'>
                  <FormGroup
                    check
                    inline
                  >
                    <Input type="radio" />
                    <Label check>
                    Other
                    </Label>
                  </FormGroup>
                </Col>
                </Row> 
                </Row>
                <Col md={12} className='other-field'>
                  <Input
                    id="companyName"
                    name="CompanyName"
                    placeholder="Fund Manager"
                    type="text"
                    value="Enter"
                  />
                </Col>                

                <Col md={12}>
                  <button className='apply-fiter-btn'>Apply Filter</button>
                </Col>
            </div>
          </div>
        </div>
      </div>

        <div className='extra-chart-detail'>
          <div className='card basic-info-wrap'>
              <div className="heading-name chat-date-board">
                <label>Chart information</label>
                <div className='action-btn'>
                  <button className="edit-btn">Show on Dashboard</button>
                </div>
              </div>
              <div className="basic-detail temp-img">
              <img src={AnnulizedFund} alt="google"/>
              </div>
            </div>
        </div>

        <div className='extra-chart-detail'>
          <div className='card basic-info-wrap'>
              <div className="heading-name chat-date-board">
                <label>Chart information</label>
                <div className='action-btn'>
                  <button className="edit-btn">Show on Dashboard</button>
                </div>
              </div>
              <div className="basic-detail temp-img">
              <img src={AnnulizedTwoFund} alt="google"/>
              </div>
            </div>
        </div>
      
      <Modal className='target-wise-selection' isOpen={modal} toggle={toggle} {...args} centered>
        <ModalHeader>Upload Date wise Target</ModalHeader>
        <ModalBody>
        <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                    Date From
                    </Label>
                    <Input
                      id="companyName"
                      name="CompanyName"
                      placeholder="Fund Manager"
                      type="date"
                      value="NA"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleSelect">
                    Date To
                    </Label>
                    <Input
                      id="companyName"
                      name="CompanyName"
                      placeholder="Fund Manager"
                      type="date"
                      value="NA"
                    />
                  </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleSelect">
                      Inflation Target
                    </Label>
                    <Input
                      id="IndustryType"
                      name="IndustryType"
                      type="select"
                    >
                      <option>
                        Consumer Price index for PF
                      </option>
                      <option>
                        PCE for Price Index
                      </option>
                      <option>
                        Manual
                      </option>
                      <option>
                        HEPI for University Endowment
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleSelect">
                    Inflation Target (in %)
                    </Label>
                    <Input
                      id="IndustryType"
                      name="IndustryType"
                      type="select"
                    >
                      <option>
                        US Dollars
                      </option>
                      <option>
                        Indian Rupees
                      </option>
                      <option>
                        Euro
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                </Row>
        </ModalBody>
        <ModalFooter  className='actions'>
          <Button onClick={toggle} className='cancel-btn'>
          Cancel
          </Button>{' '}
          <Button onClick={toggle} className='add-btn'>
          Add Date
          </Button>
        </ModalFooter>
      </Modal>
    </div>   
  )
}
