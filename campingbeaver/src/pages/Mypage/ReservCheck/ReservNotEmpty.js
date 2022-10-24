import React from 'react'

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
const ReservNotEmpty = () => {
  return (
      <table>
        
          <tr>
            <th>
              {TABLE_HEADER.map(row => (
                <th key={row}>{row}</th>
              ))}
            </th>
          </tr>
        
        
          <tr>
            <td>20221024</td>
            <td>20221024</td>
            <td>피크닉 패키지</td>
            <td><button>작성</button></td>
            <td><button>조회</button></td>
            <td><button>취소</button></td>
          </tr>
        
        {/* <tbody>
        {orderList.map((item, i) => {
          return <OrderItem key={i} item={item} total={total} />;
        })}
      </tbody> */}
      </table>
  )
}

export default ReservNotEmpty