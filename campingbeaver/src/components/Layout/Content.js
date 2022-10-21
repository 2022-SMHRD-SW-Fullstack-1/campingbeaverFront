import React from 'react'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tent from '../img/tentcamping.jpg'
import forest from '../img/forestcamp.jpg'
import styles from '../Layout/Layout.module.scss'

const Content = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        style={{}}
        className="d-block w-100"
        src={tent}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{}}
        className="d-block w-100"
        src={forest}
        alt="Second slide"
      />
    </Carousel.Item>
  </Carousel>
  )
}

export default Content