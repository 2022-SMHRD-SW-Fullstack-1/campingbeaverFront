import React from 'react'
import style from './Reservation.module.scss'


const CampCard = (props) => {



  return (
    <div className={style.reservcamp}>
        <div>
        <img src={props.item.url} className={style.imgcard}></img>
        </div>
        <div className={style.campcard}>
        <h3>{props.item.name}</h3>
        
        </div>     
    </div>
  )
}

export default CampCard