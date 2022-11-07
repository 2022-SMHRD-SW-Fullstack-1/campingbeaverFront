import React, { useState, useEffect } from 'react'
import ReservEmpty from './ReservEmpty'
import ReservNotEmpty from './ReservNotEmpty'
import styles from './ReservList.module.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const ReservList = () => {
  const [reservList, setReservList] = useState([])
  const reservEmpty = reservList.length ===0;  
  
  const {params} = useParams();

  useEffect(() => {
    // const {userId} = params.id
    const userId = 'admin'
    axios.get(`/beaver/reservlist/${userId}`,
      { headers: {
          Authorization: localStorage.access_token
      }}
    )
    .then((res) => {
      //console.log(res.data)
      setReservList(res.data)
      
    })
    .catch((error)=>console.log('Network Error: ', error))
  }, []);

  return(
    
    <div>
       <div>
          <h1 className={styles.contact}>
          My Reservation
          </h1>
          <p className={styles.contact1}>예약 / 취소 내역</p>
        </div>


      <div>
        <div>
          {reservEmpty ? (
            <ReservEmpty />
          ) : (
            <ReservNotEmpty reservList={reservList} />
          )}
        </div>
      </div>
    
    </div>
  )
}

export default ReservList
