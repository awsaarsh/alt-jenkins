import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
import AddSVG from "../../svgIcons/Add";
import CloseFilterFVG from '../../svgIcons/CloseFilter';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import DateSVG from '../../svgIcons/Date';
import DemoTwoChart from '../../components/charts/DemoTwo';
import DemoOneChart from '../../components/charts/DemoOne';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Fixed Income',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'orange',
    },
    {
      label: 'Equities',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'gray',
    },
    {
      label: 'Alternative',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'blue',
    },
    {
      label: 'Return Objective',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'green',
    },
  ],
};

export default function Return(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());


  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );
  return (
    <div className="wrapper-box">
      <h1 className="component-name">Return Objective Benchmarking</h1>
      <div className="dashboard-wrapper">
        <div className="left-bar">
          <div className='card basic-info-wrap'>
            <div className="heading-name chat-date-board">
              <label>Chart information</label>
              <div className='action-btn'>
                <button className="edit-btn">Show on Dashboard</button>
                <button className="edit-btn" onClick={toggle}>Enter Target Date Wise</button>
              </div>
            </div>
            <div className="basic-detail">
            <DemoOneChart />
            </div>
          </div>
        </div>
        <div className="right-bar">

          <div className='card basic-info-wrap'>
            <div className="heading-name">
              <label>Filter</label>
              <button className='clear-filter-btn'><CloseFilterFVG /> Clear Filter</button>
            </div>
            <div className="basic-detail">
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Fund Manager
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
                      Target Return (in %)
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
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleSelect">
                      Currency
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
                <Col md={12}>
                  <button className='apply-fiter-btn'>Apply Filter</button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      
      <Modal className='target-wise-selection' isOpen={modal} toggle={toggle} {...args} centered>
        <ModalHeader toggle={toggle} close={closeBtn}>Upload Date wise Target</ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleSelect">
                  From
                </Label>
                <div className='form-fill'>
                <DateSVG />
                <DatePicker className="form-control" selected={fromDate} onChange={(date) => setFromDate(date)} />
                </div>
              </FormGroup>
            </Col>
            <Col md={6}>              
              <FormGroup>
                <Label for="exampleSelect">
                  To
                </Label>
                <DatePicker className="form-control" selected={toDate} onChange={(date) => setToDate(date)} />
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
