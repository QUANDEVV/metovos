import { Component } from 'react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Modal from '../components/Modal'

import Script from 'next/script';
import Navber from '../components/Navber'

const MyApp = ({ Component, pageProps}) => (

 <>
  <div className=" bg-black">
  {/* <Modal /> */}
  <Navbar />
  <Navber />
    <div className="pt-[150px] h-[150vh] ">
      <Component {...pageProps} />
    </div>
    
    <Footer />
    
  </div>

  <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />

</>

)
 


export default MyApp