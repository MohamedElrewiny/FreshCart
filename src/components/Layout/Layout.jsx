import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className="container fixed-content  mx-auto">
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout