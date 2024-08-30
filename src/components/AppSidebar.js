import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'


// sidebar nav config
import navigation from '../_nav'
import { AppSidebarNav } from './AppSidebarNav'
import AddSVG from '../svgIcons/Add'
import HumburgerSVG from '../svgIcons/Humburger'
import HumburgerCloseSVG from '../svgIcons/HumburgerClose'
import Logos from '../assets/logo.jpg';

const AppSidebar = (props) => {
  // const dispatch = useDispatch()
  // const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <aside className='sidebar'>
      <div className="sidebar-brand" >
        <a><img className="avatar-img" src={Logos} alt="user@email.com" /></a>
        <div className='sidebar-toggle' onClick={()=> props.setSidebarToggle(!props.sidebarToggle)}>
          {
            props.sidebarToggle ? <HumburgerCloseSVG /> :  <HumburgerSVG />
          }
        </div>
      </div>
    <AppSidebarNav items={navigation} />
    </aside>
    
  )
}

export default React.memo(AppSidebar)
