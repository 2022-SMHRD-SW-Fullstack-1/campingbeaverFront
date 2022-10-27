import React from 'react'
import Styles from './Reservation.module.scss'
import FilterButton from './FilterButton'
import ReservCamp from './ReservCamp'
import { Route, Routes, Link } from 'react-router-dom'

const ReservContent = () => {
    return (
        <div>

            <div className={Styles.reservbutton}>
                <FilterButton />
                <div>
                    <div className={Styles.reservtitle}>
                    <h1>Recommendation</h1>
                    <p>camping beaver가 추천하는 캠핑 레시피</p>
                    </div>
                    <div className={Styles.imgbox}>
                    <ReservCamp />
                    </div>
                </div>

            </div>
        </div>


    )
}

export default ReservContent