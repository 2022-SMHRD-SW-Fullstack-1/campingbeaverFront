import React, { useEffect } from 'react'
import ReservItem from './ReservItem';
import styles from './ReservList.module.scss'

const TABLE_HEADER = [
  '예약번호',
  '예약날짜',
  '예약상품명',
  '결제금액',
  '리뷰작성',
  '배송현황',
  '예약취소'
];

const ReservNotEmpty = ({reservList}) => {

  useEffect(() => {
    console.log('reservList : ')
    console.log(reservList)
  },[])

  return (

    <div className={styles.ListContainer}>
    <table>
      <thead>
        <tr>
          {TABLE_HEADER.map(row => (
            <th key={row}>{row}</th>
          ))}
        </tr>
      </thead>
      
      <tbody>
        {reservList && reservList.map(({pkg_seq, reserv_num, reserv_date, reserv_name, reserv_price})=> {
          return <ReservItem 
                  key = {reserv_num}
                  reserv_num = {reserv_num}
                  reserv_date = {reserv_date}
                  reserv_name = {reserv_name}
                  reserv_price = {reserv_price}
                  review = "작성"
                  delivery = "조회"
                  cancel = "취소"
                  pkg_seq = {pkg_seq}
                  />;
        })}
            
          </tbody>
      </table>
      </div>
//  
  )
}

export default ReservNotEmpty