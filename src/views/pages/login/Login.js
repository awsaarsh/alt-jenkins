import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Col, Row, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Logo from '../../../components/Logo';
import email from '../../../assets/svg/edit-icon.svg';
import Grayemail from "../../../svgIcons/Grayemail";
import Google from "../../../svgIcons/Google";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import FirstStep from '../register/FirstStep';
import SecondStep from '../register/SecondStep';
import ThirdStep from '../register/ThirdStep';
import FourStep from '../register/FourStep';
import Candal from '../../../assets/Vector.svg';
import ALTSVG from '../../../svgIcons/Add copy';
import { color } from 'echarts';
const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const Login = (args) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        errors: {}
    });
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [page, setPage] = useState(0);
    const textStyle = {
        width: '100%',
        marginTop: '0.25rem',
        color: '#dc3545'
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            try {
                const headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                };
                // Make a POST request to submit form data
                const response = await axios.post(`${apiUrl}login/`, formData, { headers });
                console.log('Form submitted successfully:', response);
                if (response.data?.token) {
                    localStorage.removeItem('token');
                    localStorage.setItem('token', response.data.token);
                    if (response.data.first_login) {
                        setModal(!modal);
                    } else {
                        window.location.href = '/layout/dashboard'
                    }
                }
            } catch (error) {
                if (error.response?.data?.error) {
                    const errors = { apiError: error.response.data.error };
                    setFormData({
                        ...formData,
                        errors
                    });
                }
            }
        } else {
            setFormData({
                ...formData,
                errors
            });
        }
    }

    const validateForm = data => {
        const errors = {};
        if (!data.username) {
            errors.username = "Username is required"
        }
        if (!data.password) {
            errors.password = "Password is required";
        }
        return errors;
    };

    const closeBtn = (
        <button className="close" onClick={toggle} type="button">
            &times;
        </button>
    );

    const FormTitles = ["Select Type", "Select Type", "Select Firm", "Verify Firm"];

    const PageDisplay = () => {

        if (page === 0) {
            return <FirstStep formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <SecondStep formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <ThirdStep formData={formData} setFormData={setFormData} />;
        } else if (page === 3) {
            return <FourStep formData={formData} setFormData={setFormData} />;
        } else {
            return <FirstStep formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className="login-wrapper">
            <div className='common-section'>
                <div class="right-bar">
                    <div className='logo-name'>
                        <ALTSVG />
                    </div>
                    <div className='highlight-b'>
                        <h4>Join Us</h4>
                        <p>Turn Data into Confidence & Tell Your Investment Story</p>
                    </div>
                    <div className='vector-img'>
                        <img src={Candal} />
                    </div>
                </div>
                <div className="left-bar">
                    <div className='highlight-text'>
                        <h2>Log in</h2>
                    </div>
                    <Form className="form-signin" onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email address
                            </Label>
                            <div className="input-box">
                                <div className="field-icon">
                                    <Grayemail />
                                </div>
                                <Input
                                    id="username"
                                    name="username"
                                    placeholder="Enter email"
                                    type="email"
                                    value={formData.username}
                                    invalid={formData.errors.username}
                                    onChange={handleChange}
                                />
                                <FormFeedback>{formData.errors.username}</FormFeedback>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Password
                            </Label>
                            <div className="input-box">
                                <div className="field-icon">
                                    <Grayemail />
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    type="password"
                                    value={formData.password}
                                    invalid={formData.errors.password}
                                    onChange={handleChange}
                                />
                                <FormFeedback>{formData.errors.password}</FormFeedback>
                            </div>
                        </FormGroup>
                        <div style={textStyle}>
                            {formData.errors.apiError}
                        </div>


                        <div className="forgot-link">
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Remember me
                                </Label>
                            </FormGroup>

                            <a href="#" className="link">Forgot your password?</a>
                        </div>
                        <Col md={12} className="submit-column">
                            {/* <Link to="/dashboard">
                                Login
                            </Link> */}
                            <Button type='submit' className='submit-btn'>Login</Button>
                        </Col>

                        <Col md={12} className="not-a-link">
                            <span>Not registered yet? <Link to="/register">Create an Account</Link></span>
                        </Col>

                        <Col md={12} className="or-section">
                            <span>OR</span>
                        </Col>

                        <Col md={12} className="third-party-login">
                            <Button>
                                <Google /> Sign in with Google
                            </Button>
                        </Col>

                    </Form>

                    <Modal isOpen={modal} toggle={toggle} {...args} centered>
                        <ModalHeader toggle={toggle} close={closeBtn}>
                            <h1>{FormTitles[page]}</h1>
                        </ModalHeader>
                        <ModalBody>
                            {PageDisplay()}
                        </ModalBody>
                        <ModalFooter>
                            <div className="footer action-btn">
                                {page !== 3 &&
                                    <>
                                        <button
                                            className='choose-btn'
                                            disabled={page === 0}
                                            onClick={() => {
                                                setPage((currPage) => currPage - 1);
                                            }}
                                        >
                                            {page === FormTitles.length - 2 ? "Cancel" : "Cancel"}
                                        </button>
                                        <button
                                            className='done-btn'
                                            onClick={() => {
                                                if (page === FormTitles.length - 1) {
                                                    alert("FORM SUBMITTED");
                                                    console.log(formData);
                                                    setModal(!modal);
                                                } else {
                                                    setPage((currPage) => currPage + 1);
                                                }
                                            }}
                                        >
                                            {page === FormTitles.length - 2 ? "Continue" : "Continue"}
                                        </button>
                                    </>
                                }

                                {page === 3 &&
                                    <button
                                        className='done-btn'
                                        onClick={() => {
                                            if (page === FormTitles.length - 1) {
                                                console.log(formData);
                                                setModal(!modal);
                                                window.location.href = '/layout/dashboard'
                                                setPage(0);
                                            } else {
                                                setPage((currPage) => currPage + 1);
                                            }
                                        }}
                                    >
                                        Done
                                    </button>
                                }

                            </div>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
export default Login;
