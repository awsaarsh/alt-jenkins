import React, { useState } from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'
import UserTour from '../components/tour/UserTour';

const DefaultLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [msidebarToggle, setMSidebarToggle] = useState(true);

  return (
    <>
    <div className={msidebarToggle ? 'm-sidebar-hide' : 'm-sidebar-active'}>
    <div className={sidebarToggle ? 'sidebar-active' : 'sidebar-hide'}>
      <AppSidebar setMSidebarToggle={setMSidebarToggle} setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle} />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader  setMSidebarToggle={setMSidebarToggle} msidebarToggle={msidebarToggle}/>
        <div className="body flex-grow-1 content-area">
          <AppContent />
        </div>
      </div>
    </div>
    </div>
    <UserTour />
    </>    
  )
}

export default DefaultLayout
