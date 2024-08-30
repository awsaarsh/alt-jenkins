import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
import AddSVG from "../../svgIcons/Add";
import CloseFilterFVG from '../../svgIcons/CloseFilter';
import React, { useState } from 'react';
import { LineChart } from '../../components/charts/Line';
import DemoTwoChart from '../../components/charts/DemoTwo';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Pool Returns',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Benchmark Returns',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

export default function Model(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [state, setState] = useState(true);
  const [stateOne, setStateOne] = useState(true);

  return (
    <div className="wrapper-box">
      <h1 className="component-name">Model Portfolio Benchmark</h1>
      <div className="dashboard-wrapper">
        <div className="left-bar">
          <div className='card basic-info-wrap'>
            <div className="heading-name chat-date-board">
              <label>Chart information</label>
              <div className='action-btn'>
                <button className="edit-btn">Show on Dashboard</button>
              </div>
            </div>
            <div className="basic-detail line-chart">
            <DemoTwoChart />
            </div>
          </div>
          
        </div>
        <div className="right-bar">
          <div className='card basic-info-wrap'>
            <div className="heading-name">
              <label>Customize</label>
              <button className='clear-filter-btn'><CloseFilterFVG /> Clear</button>
            </div>
            <div className="basic-detail">
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleEmail">
                    Return (in %)
                    </Label>
                    <Input
                      id="companyName"
                      name="CompanyName"
                      placeholder="Fund Manager"
                      type="text"
                      value="NA"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleSelect">
                    Fees (in %)
                    </Label>
                    <Input
                      id="IndustryType"
                      name="IndustryType"
                      type="select"
                    >
                      <option>
                        1
                      </option>
                      <option>
                        2
                      </option>
                      <option>
                        3
                      </option>
                      <option>
                        4
                      </option>
                      <option>
                        5
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleSelect">
                    Date From
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
                    Date To
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
            <Row className='select-Proportion'>
              <Col md={12}>
                  <h6>Select Proportion</h6>
              </Col>
              <Col md={4}>
                <FormGroup check>
                <Input type="radio" />
                {' '}
                <Label check>60 / 40
                </Label>
                </FormGroup>
              </Col>
              <Col md={4}>
                <Input type="radio" />
                {' '}
                <Label check>70 / 30
                </Label>
              </Col>
              <Col md={4}>
                <FormGroup check>
                <Input type="radio" />
                {' '}
                <Label check>75 / 25
                </Label>
                </FormGroup>                
              </Col>                            
            </Row>
              <Row className='switch-box'>
                <FormGroup switch>
                  <Label check>Does the Pool have a Global Equity Investment Program or mandate to invest in global equities?</Label>
                  <Input
                    type="switch"
                    checked={stateOne}
                    onClick={() => {
                      setStateOne(!stateOne);
                    }}
                  />
                </FormGroup>
              </Row>
              <Row className='switch-box'>
                <FormGroup switch>
                  <Input
                    type="switch"
                    checked={state}
                    onClick={() => {
                      setState(!state);
                    }}
                  />
                  <Label check>Does the Pool have a Global Fixed Income investment Program?</Label>
                </FormGroup>
              </Row>
                <Col md={12}>
                  <button className='apply-fiter-btn'>Apply Filter</button>
                </Col>              
            </div>
          </div>
        </div>
      </div>      
    </div>   
  )
}
