import React, { useState } from 'react';
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import {ChooseHierarchyTab } from '../../components/tabs/ChooseHierarchyTab';
import AddSVG from '../../svgIcons/Add';
import { ChPublicPrivateTab } from '../../components/tabs/ChPublicPrivateTab';
import { Link } from 'react-router-dom';

function ChooseHirerarchy(args) {
    const [modal, setModal] = useState(false);
    const toggleOne = () => setModal(!modal);

    const closeBtn = (
        <button className="close" onClick={toggleOne} type="button">
          &times;
        </button>
      );

    return (
        <>
            <div className="choose-wrap">
                <div className='common-header'>
                    <h1 className="component-name">Choose Hierarchy</h1>
                    <p>Choose Hierarchy based on organization Structure asset classes used by your organization. You could choose level hierarchy should be based on investment program & program Manager</p>
                    <p>This will update your benchmarking result too</p>
                </div>
                <div className="choose-hirerarchy-wrapper">
                    <div className='card'>
                        <div className='heading-section'>
                            <h3>Basic Information</h3>
                            <Link  to="/choose-hierarchy/live-chat" className='view-chart-btn'>View Live Chart</Link>
                        </div>
                        <div className='select-multi-check'>
                            <Row>
                                <Col sm="8">
                                    <div className='grid-container'>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Equity
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Fixed Income
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Tips
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    REIT
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Fixed Income
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Commodities
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Liquidity
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Check me out
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Check me out
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Check me out
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <FormGroup check>
                                                <Input type="checkbox" />
                                                {' '}
                                                <Label check>
                                                    Check me out
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="grid-item">
                                            <a href='#' className='add-view-more'>
                                                <AddSVG /> View More
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" className='choose-action-btn'>
                                    <div className='suggest-btn'>
                                        <button onClick={toggleOne}>? Suggest</button>
                                    </div>
                                    <div className='btn-grp'>
                                        <button>Reset </button>
                                        <button>Apply</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='card'>
                        <ChooseHierarchyTab />
                    </div>

                    <div className='card'>
                        <ChPublicPrivateTab />
                    </div>

                    <div className='outside-btn-group'>
                        <button className='outline-btn'>Show in Live Chart</button>
                        <button className='outline-btn'>Save</button>
                    </div>
                </div>

                <Modal className='target-wise-selection' isOpen={modal} toggleOne={toggleOne} {...args} centered>
                     <ModalHeader toggleOne={toggleOne} close={closeBtn}>Suggest</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Type
                                    </Label>
                                    <Input
                                        id="Type"
                                        name="Type"
                                        placeholder="Enter"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Level 1
                                    </Label>
                                    <Input
                                        id="companyName"
                                        name="CompanyName"
                                        placeholder="Enter"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Level 2
                                    </Label>
                                    <Input
                                        id="companyName"
                                        name="CompanyName"
                                        placeholder="Enter"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleText">
                                        Description
                                    </Label>
                                    <Input
                                        id="exampleText"
                                        name="text"
                                        type="textarea"
                                        placeholder='Enter'
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        {/* <Congratulation /> */}

                    </ModalBody>
                    <ModalFooter className='actions'>
                        <Button onClick={toggleOne} className='cancel-btn'>
                            Cancel
                        </Button>{' '}
                        <Button onClick={toggleOne} className='add-btn'>
                            Suggest
                        </Button> 
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default ChooseHirerarchy;