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

export default function Total(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [state, setState] = useState(true);

  return (
    <div className="wrapper-box">
      <h1 className="component-name">Total Portfolio Benchmark</h1>
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
            <DemoTwoChart />
            </div>
          </div>
        </div>
        <div className="right-bar">
          <div className='card basic-info-wrap customize'>
            <div className="heading-name">
              <label>Customize</label>
              <button className='clear-filter-btn'><CloseFilterFVG /> Clear</button>
            </div>
            <div className="basic-detail">
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleSelect">
                    Choose Equity Benchmark
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
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleSelect">
                    Choose Fixed Income Benchmark
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
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleSelect">
                    Choose Hedge Funds Benchmark
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
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleSelect">
                    Choose Real Assest Benchmark
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
            <Row className='select-Proportion'>
              <Col md={12}>
                  <h6>Strategic Target Allocation</h6>
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">
                      Equity (in %)
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
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">
                      Fees (in %)
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
                </Row>
              </Col>  

              <Col md={12}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">
                      Hedge Funds (in %)
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
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">
                      Fees (in %)
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
                </Row>
              </Col>  

              <Col md={12}>
                <Row>
                  <Col md={6}>
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
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">
                      Fees (in %)
                      </Label>
                      <Input
                        id="companyName"
                        name="CompanyName"
                        placeholder="Fund Manager"
                        type="text"
                        value="NA"
                      />
                    </FormGroup>
                    <button className='add-fees-btn'>Add Fees</button>
                  </Col>
                </Row>
            </Col>                                         
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
