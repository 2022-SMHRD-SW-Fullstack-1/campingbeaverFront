import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReviewForm from '../../ReviewUpload/ReviewForm'


const ReservItem = ({item}) => {

  const navigate = useNavigate();
  const navigateToReview = () => {
    return (
      navigate("/ReviewForm")
    )
  } 

  return (
    <tr className="cartItem">
      <td>{item.reservNum}</td>
      {/* <td>
        <img className="productImg" src={img} alt='iteminfo' />
      </td> */}
      <td>{item.reservDate}</td>
      <td>{item.reservName}</td>
      <td>￦{item.reservPrice}</td>
      <td><button onClick={navigateToReview}>{item.review}</button></td>
      <td><button>{item.delivery}</button></td>
      <td><button>{item.cancel}</button></td>
    </tr>
  )
}

export default ReservItem