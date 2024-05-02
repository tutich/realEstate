
import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Pricing from "../pricing/Pricing"
import Contact from "../contact/Contact"
import SignUp from "../auth/SignUp"
import SignIn from "../auth/SignIn"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
