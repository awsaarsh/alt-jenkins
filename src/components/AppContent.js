import React, { Suspense } from 'react'
import { Navigate, Route, Routes, Outlet } from 'react-router-dom'

// routes config
import routes from '../routes'

const AppContent = () => {
  return (
    <div className="" lg>
      <Suspense fallback={<div className='loader' color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          {/* <Route path="/" /> */}
          <Route path="*" element={<Outlet />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default React.memo(AppContent)
