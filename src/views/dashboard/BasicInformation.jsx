import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
import editIcon from '../../assets/svg/edit-icon.svg';
import ProfileIMG from '../../assets/1.jpg';

function BasicInformation() {
    return (
        <>
            <div className='card basic-info-wrap'>
                <div className="heading-name">
                    <label>Basic information</label>
                    <button className="edit-btn">Edit</button>
                </div>
                <div className="basic-detail">
                    <Row>
                        <div className='row-panel'>
                            <div className='avatar-edit-img'>
                                <span>Profile Picture</span>
                                <div className='upload-avatar'>
                                    <img className="avatar-img" src={ProfileIMG} alt="user@email.com" />
                                    <Input
                                        id="exampleFile"
                                        name="file"
                                        type="file"
                                    />
                                    <Button variant="contained">
                                        <img src={editIcon} alt="google" width={16} height={21} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col md={4}>
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
                        <Col md={4}>
                            <FormGroup>
                                <Label for="examplePassword">
                                Chief Investment Officer
                                </Label>
                                <Input
                                    id="email"
                                    name="password"
                                    placeholder="Chief Investment Officer"
                                    type="email"
                                    value="NA"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleSelect">
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    name="username"
                                    placeholder="Chief Investment Officer"
                                    type="text"
                                    value="John Due"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    First Name
                                </Label>
                                <Input
                                    id="firstName"
                                    name="firsName"
                                    placeholder="First Name"
                                    type="text"
                                    value="John"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Last Name
                                </Label>
                                <Input
                                    id="email"
                                    name="password"
                                    placeholder="Last Name"
                                    type="email"
                                    value="Doe"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleSelect">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    name="password"
                                    placeholder="Enter Email"
                                    type="email"
                                    value="johndoe@gmail.com"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default BasicInformation;