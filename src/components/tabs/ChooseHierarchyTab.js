import { Col, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import React, { useState } from 'react';
import classnames from 'classnames';

export const ChooseHierarchyTab = () => {
    // State for current active Tab 
    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    // Toggle active state for Tab 
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    return (
        <div className='tab-selection'>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1'); }}
                    >
                        Equity
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '2'
                        })}
                        onClick={() => { toggle('2'); }}
                    >
                        Fixed Income
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '3'
                        })}
                        onClick={() => { toggle('3'); }}
                    >
                        Hedge Funds
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '4'
                        })}
                        onClick={() => { toggle('4'); }}
                    >
                        Real Assests
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '5'
                        })}
                        onClick={() => { toggle('5'); }}
                    >
                        Alternative
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm={6}>
                            <FormGroup row>
                                <Label for="examplePassword" sm={4}>
                                    Level 1
                                </Label>
                                <Col sm={8}>
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
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm={6}>
                            <FormGroup row>
                                <Label for="examplePassword" sm={4}>
                                    Level 1
                                </Label>
                                <Col sm={8}>
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
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col sm={6}>
                            <FormGroup row>
                                <Label for="examplePassword" sm={4}>
                                    Level 1
                                </Label>
                                <Col sm={8}>
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
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>3
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>4
                    </Row>
                </TabPane>
                <TabPane tabId="5">
                    <Row>5
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}