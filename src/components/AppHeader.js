import ProfileIMG from '../assets/1.jpg'
import { Input } from 'reactstrap'
import SearchSVG from '../svgIcons/Search'
import React, { useState } from 'react';
import ProfileArrowButtonSVG from '../svgIcons/ProfileArrowButton';
import { Link } from 'react-router-dom';
import HumburgerSVG from '../svgIcons/Humburger'
import HumburgerCloseSVG from '../svgIcons/HumburgerClose'
import Logos from '../assets/logo.jpg';
import ProfileUserSVG from '../svgIcons/ProfileUser';
import InboxSVG from '../svgIcons/InboxIcon';
import SettingsSVG from '../svgIcons/Settings';
import HelpSVG from '../svgIcons/Help';
import LogoutSVG from '../svgIcons/Logout';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const AppHeader = (props) => {

  // const [isActive, setIsActive] = useState(false);

  // const handleProfileClick = () => {
  //   setIsActive(!isActive);
  // };

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('token not found');
      return;
    }
    try {
      const headers = {
        'Authorization': `Token ${token}`
      }
      const response = await axios.post(`${apiUrl}logout/`, { headers });
      console.log(response)
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className='header header-sticky d-flex justify-content-end'>
      <div className='m-section'>
        <a><img className="avatar-img" src={Logos} alt="user@email.com" /></a>
        <div className='m-sidebar-toggle' onClick={() => props.setMSidebarToggle(!props.msidebarToggle)}>
          {
            props.msidebarToggle ? <HumburgerSVG /> : <HumburgerCloseSVG />
          }
        </div>
      </div>
      <div className='common-search'>
        <SearchSVG />
        <Input type='text' placeholder='Search' />
      </div>
      <ul className="header-nav">
        <li className="nav-item dropdown"><a className="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button">
          <div className='d-flex user-profile'>
            <div className="avatar avatar-md">
              <img className="avatar-img" src={ProfileIMG} alt="user@email.com" />
            </div>
            <div className='user-info'>
              <div><b>Jane Eyre</b></div>
              <label>UX Designer</label>
            </div>
            <div className=''>
              <ProfileArrowButtonSVG />
            </div>
            <div className='menu'>
              <ul>
                <li><Link to='/layout/user-profile'><ProfileUserSVG /> &nbsp;User Profile</Link></li>
                <li><Link to=''><InboxSVG />&nbsp;Inbox</Link></li>
                <li><Link to='/layout/setting'><SettingsSVG /> &nbsp;Settings</Link></li>
                <li><Link to=''><HelpSVG />&nbsp;Help</Link></li>
                <li><Link to='/'><LogoutSVG />&nbsp;Sign Out</Link></li>
              </ul>
            </div>
          </div>
        </a>
        </li>
      </ul>
    </header>
  )
}
export default AppHeader
