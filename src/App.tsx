
import { Outlet } from 'react-router'
import './App.css'

import CommonLayout from './components/layout/CommonLayout'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

function App() {
  //CommonLayout
  return (
    <>
      <CommonLayout>
        <Navbar/>
        <Outlet />
        <Footer/>
      </CommonLayout>
    </>
  )
}

export default App
