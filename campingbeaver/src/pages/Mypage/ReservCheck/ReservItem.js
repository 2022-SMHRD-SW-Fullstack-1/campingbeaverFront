import React from 'react'


const ReservItem = ({item}) => {
  return (
    <tr className="cartItem">
      <td>{item.reservNum}</td>
      {/* <td>
        <img className="productImg" src={img} alt='iteminfo' />
      </td> */}
      <td>{item.reservDate}</td>
      <td>{item.reservName}</td>
      <td>￦{item.reservPrice}</td>
      <td><button>{item.review}</button></td>
      <td><button>{item.delivery}</button></td>
      <td><button>{item.cancel}</button></td>
    </tr>
  )
}

export default ReservItem