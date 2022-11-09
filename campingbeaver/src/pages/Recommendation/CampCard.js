import React from 'react'
import style from './Reservation.module.scss'
import sitelist from '../../data/sitelist.json'
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';

const CampCard = ({value}) => {

    
   return (
    // <div className={style.reservcamp}>
    //     <div>
    //     <img src={sitelist.campsite[value].imgsrcsecond} className={style.imgcard}></img>
    //     </div>
    //     <div className={style.campcard}>
    //     <h3>{sitelist.campsite[value].site_name}</h3>
        
    //     </div>     
    // </div>
    <div class="cell" key={sitelist.campsite[value].site_seq}>
    <div class="img-box">
          <img src={sitelist.campsite[value].imgsrcfirst} height='220px' alt="" />
          <Link to={`/recommendation${sitelist.campsite[value].site_seq}`}><div class="view">
            <i class="fa fa-search" aria-hidden="true"></i>
            <span>view</span>
          </div></Link>
        </div>
        <div class="txt-box">
          <div class="txt1">
            <div class="head">
              <h1 class="name">{sitelist.campsite[value].site_name}</h1>
              <div class="sub-name"></div>
            </div>

            <div class="body">
              <div class="first-line">


                <i class="fab fa-houzz" aria-hidden="true"></i>
              

              </div>
             
            </div>
          </div>
        </div>
        </div>
  )
}

export default CampCard