
import { Outlet } from 'react-router'
import './App.css'

import CommonLayout from './components/layout/CommonLayout'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

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
