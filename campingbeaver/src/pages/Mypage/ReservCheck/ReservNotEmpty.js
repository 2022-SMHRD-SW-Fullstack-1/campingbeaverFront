import React from 'react'
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
// const OrderNotEmpty = ({ orderList }) => {
//   const price = orderList.map(item => item.price).reduce((a, b) => a + b, 0);
//   const shipping = price >= 50000 ? 0 : 3000;
//   const total = price + shipping;
const ReservNotEmpty = ({reservList}) => {

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
            {reservList.reserv.map((item, i)=> {
              return <ReservItem key={i} item={item} />;
            })}
            
          </tbody>
      </table>
      </div>
      
        
        
        
      
  )
}

export default ReservNotEmpty
{/* <tbody>
        {orderList.map((item, i) => {
          return <OrderItem key={i} item={item} total={total} />;
        })}
      </tbody> */}

      // {reservList.map((reserv) =>(
      //   <tr key={reserv.id}>
      //     <td>{reserv.reservNum}</td>
      //     <td>{reserv.reservDate}</td>
      //     <td>{reserv.reservName}</td>
      //     <td>{reserv.reservPrice}</td>
      //     <td><button>{reserv.review}</button></td>
      //     <td><button>{reserv.delivery}</button></td>
      //     <td><button>{reserv.cancel}</button></td>
      //   </tr>
      // ))}

      