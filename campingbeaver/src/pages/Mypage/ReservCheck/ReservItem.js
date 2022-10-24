import React from 'react'
import img from '../../components/img/tentcamping.jpg'

const ReservItem = () => {
  return (
    <tr className="cartItem">
      <td className="checkBox">
        <div>2022-10-24</div>
      </td>
      <td>
        <img className="productImg" src={img} alt='iteminfo' />
      </td>
      <td>피크닉 패키지</td>
      <td>￦59,000</td>
      <td className="quantity">
        <div>
          <div>1</div>
        </div>
      </td>
      <td>-</td>
      <td>기본배송</td>
      {total >= 50000 ? (
        <td className="charge">무료배송</td>
      ) : (
        <td className="charge">
          3000원
          <br />
          조건
        </td>
      )}
      <td>￦59,000</td>
    </tr>
  )
}

export default ReservItem