import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.scss'
import Content from './Content'
import Survey from './Survey'
import SurveySecond from './SurveySecond'
import SurveyThird from './SurveyThird'
import {Route, Routes} from 'react-router-dom'
import campsite from '../img/campsite.gif'
import { Carousel } from "react-bootstrap";
import campfire from '../img/campfire.gif'

const Layout = (props) => {
  return (
    <div>
        <Header/>
        <Carousel fade>
    <Carousel.Item>
      <img
        style={{}}
        className="d-block w-100"
        src={campsite}
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
        <Routes>
          <Route path='/' element={<Survey/>}/>
          <Route path='/surveysecond' element={<SurveySecond/>}/>
          <Route path='/surveythird' element={<SurveyThird/>}/>
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