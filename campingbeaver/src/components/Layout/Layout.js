import React, { useContext } from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.scss'
import Content from './Content'
import Survey from './Survey'

import {Route, Routes, Link} from 'react-router-dom'
import campsite from '../img/campsite.gif'
import { Carousel } from "react-bootstrap";
import campfire from '../img/campfire.gif'
import tentcamping from '../img/tentcamping.jpg'


const Layout = (props) => {
  return (
    <div>
        <Header/>
        {/* <Nav/> */}
        <div className={styles.layout}>
        <Carousel fade>
    <Carousel.Item>
      <img
        style={{}}
        className="d-block w-100"
        src={tentcamping}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{}}
        className="d-block w-100"
        src={campfire}
        alt="First slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
        <Routes>
          <Route path='/' element={<Survey/>}/>
        </Routes>
        <main className={styles.main}>
            {props.children}
        </main>
        <h1 align='center'>Our Recommendation</h1>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Layout