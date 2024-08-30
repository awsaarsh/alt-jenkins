import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DashboardSVG from '../svgIcons/Dashboard'
import ReturnObject from '../svgIcons/ReturnObject'
import ModalPortfolioSVG from '../svgIcons/ModalPortfolio'
import TotalPortfolioSVG from '../svgIcons/TotalPortfolio'
import InterquartileSVG from '../svgIcons/Interquartile'
import BanchmarkingSVG from '../svgIcons/Banchmarking'
import ChooseHierarchySVG from '../svgIcons/ChooseHierarchy'
import LogSVG from '../svgIcons/Log'

export const AppSidebarNav = () => {
  const [active, setActive] = useState(false);
  return (
    <ul className='main-menu'>
      <li><NavLink to="/layout/dashboard" className='dashboard-link'><span><DashboardSVG /></span>Dashboard</NavLink></li>
      <li className='has-submenu'>
        <a className={active && 'active'} onClick={() => setActive(!active)}><span><BanchmarkingSVG /></span>Benchmarking </a>
        <ul className={active ? 'sub-menu show' : 'sub-menu'}>
          <li><NavLink to="/layout/benchmarking/return"><span><ReturnObject /></span>Return Objective</NavLink></li>
          <li><NavLink to="/layout/benchmarking/model"><span><ModalPortfolioSVG /></span>Model Portfolio</NavLink></li>
          <li><NavLink to="/layout/benchmarking/total"><span><TotalPortfolioSVG /></span>Total Portfolio Policy</NavLink></li>
          <li><NavLink to="/layout/benchmarking/interquartile" ><span><InterquartileSVG /></span>Interquartile Benchmark</NavLink></li>
        </ul>
      </li>
      <li><NavLink to="/layout/choose-hierarchy" className='dashboard-link'><span><ChooseHierarchySVG /></span>Choose hierarchy</NavLink></li>
      <li><NavLink to="/layout/onboarding"><span><BanchmarkingSVG /></span>Onboarding Requests</NavLink></li>
      <li><NavLink to="/layout/logs"  className='dashboard-link'><span><LogSVG /></span>Logs</NavLink></li>
      {/* <li><NavLink to="/teams"><span><InterquartileSVG /></span>Teams</NavLink></li> */}
      <li><NavLink to="/layout/firm-profile"><span><InterquartileSVG /></span>Firm Profile</NavLink></li>
    </ul>
  )
}

