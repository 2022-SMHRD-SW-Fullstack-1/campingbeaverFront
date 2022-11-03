import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ReservItem = ({ reservNum, reservDate, reservName, reservPrice,
   review, delivery, cancel }) => {

  const params = useParams();
  const navigate = useNavigate();
  const navigateToReview = () => {
    return (
      navigate(`/ReviewForm:${reservNum}`)
      )
    } 

  return (
    <tr className="cartItem">
      <td>{reservNum}</td>
      {/* <td>
        <img className="productImg" src={img} alt='iteminfo' />
      </td> */}
      <td>{reservDate}</td>
      <td>{reservName}</td>
      <td>￦{reservPrice}</td>
      <td><button onClick={navigateToReview}>{review}</button></td>
      <td><button>{delivery}</button></td>
      <td><button>{cancel}</button></td>
    </tr>
  )
}

export default ReservItem