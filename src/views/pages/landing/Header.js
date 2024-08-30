import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Dropdown,
    Link
} from "reactstrap";
import ALTSVG from "../../../svgIcons/Add copy";
import { HashLink } from 'react-router-hash-link';
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // const showDropdown = () => {
    //   setShow(!show);
    // };
    // const hideDropdown = () => {
    //   setShow(false);
    // };

    return (
        <div className="navigation-header">
            <div className="container" >
                <Navbar light expand="md">
                    <NavbarBrand href="/"><ALTSVG /></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <HashLink smooth to="#startup" className="nav-link" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Whitepaper</HashLink>
                            </NavItem>
                            <NavItem>
                                <HashLink smooth to="#what-we-do" className="nav-link" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
                                    What we do
                                </HashLink>
                            </NavItem>
                            <NavItem>
                                <HashLink smooth to="#Why-atl" className="nav-link" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
                                    Why Alt?
                                </HashLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://altindices.com/about-us/">
                                    About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    Contact
                                </NavLink>
                            </NavItem>
                            <Dropdown className="specific-dropdown" nav inNavbar isOpen={show} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                                <DropdownToggle nav caret>
                                    HHI Benchmarks
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <NavLink onClick={() => setIsOpen(false)} href="https://altindices.com/hhi/banking/">Banking</NavLink>
                                    <NavLink onClick={() => setIsOpen(false)} href="https://altindices.com/hhi/telecom/">Telecom</NavLink>
                                    <NavLink onClick={() => setIsOpen(false)} href="https://altindices.com/hhi/insurance/">Insurance</NavLink>
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                        {/* <NavbarText className="sign-up-btn">Sign Up</NavbarText> */}
                        <NavLink to="/register" tag={RRNavLink} className="sign-up-btn">
                            Sign Up
                        </NavLink>
                        {/* <NavLink to="/login" tag={RRNavLink} className="sign-up-btn" style={{ marginLeft: '10px' }}>
                            Sign In
                        </NavLink> */}
                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
