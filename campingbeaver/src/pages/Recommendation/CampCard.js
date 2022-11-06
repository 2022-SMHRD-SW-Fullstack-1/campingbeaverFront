import React from 'react'
import style from './Reservation.module.scss'
import sitelist from '../../data/sitelist.json'
import surveyimg from './campimg/surveyimg.jpg'

const CampCard = ({value}) => {


    console.log(value)


  return (
    <div className={style.reservcamp}>
        <div>
        <img src={surveyimg} className={style.imgcard}></img>
        </div>
        <div className={style.campcard}>
        <h3>{value}</h3>
        
        </div>     
    </div>
  )
}

export default CampCard