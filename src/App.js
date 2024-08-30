import React, { Suspense, useState } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Landing = React.lazy(() => import('./views/pages/landing/Landing'))
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  // const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            {/* <CSpinner color="primary" variant="grow" /> */}
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/landing" name="Landing Page" element={<Landing />} />
          <Route exact path="/layout/*" name="Default Layout" element={<DefaultLayout />} />
          {/* <Route exact path="/dashboard" name="Dashboard Page" element={<Dashboard />} /> */}
          {/* <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
          <Route path="*" name="Home" element={<Landing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
