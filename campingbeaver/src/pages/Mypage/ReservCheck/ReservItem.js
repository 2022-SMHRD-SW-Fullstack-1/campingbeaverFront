
import { useNavigate } from 'react-router-dom'
import './ReservList.module.scss'

const ReservItem = ({ pkg_seq, reserv_num, reserv_date, reserv_name, reserv_price,
   review, delivery, cancel }) => {

  const navigate = useNavigate();
  const navigateToReview = () => {
    return (
      
      //console.log(pkg_seq)
      
      navigate(`/ReviewForm:${reserv_num}?pkg_seq=${pkg_seq}`)
      )

    } 

  return (
    <tr className="cartItem">
      <td>{reserv_num}</td>
      {/* <td>
        <img className="productImg" src={img} alt='iteminfo' />
      </td> */}
      <td>{reserv_date}</td>
      <td>{reserv_name}</td>
      <td>￦{reserv_price}</td>
      <td><button onClick={navigateToReview}>{review}</button></td>
      <td><button>{delivery}</button></td>
      <td><button>{cancel}</button></td>
    </tr>
  )
}

export default ReservItem