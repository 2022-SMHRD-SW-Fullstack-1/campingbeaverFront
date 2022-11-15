import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ReservList.module.scss";

const ReservItem = ({
  pkg_seq,
  reserv_num,
  reserv_date,
  reserv_name,
  reserv_price,
  review,
  delivery,
  cancel,
}) => {
  const reserv_seq = reserv_num.substring(8);

  const navigate = useNavigate();
  const navigateToReview = () => {
    return navigate(`/ReviewForm:${reserv_num}?pkg_seq=${pkg_seq}`);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (e) => {
    console.log(reserv_seq);
    axios
      .get("/beaver/reserv/delete", {
        params: {
          reserv_seq: reserv_seq,
        },
      })
      .then(() => {
        alert("취소 완료!");
        window.location.replace("MyPage");
      });
  };
  useEffect(() => {});

  return (
    <tr className="cartItem">
      <td>{reserv_num}</td>
      <td>{reserv_date}</td>
      <td>
        <Link to={`/storedetail${pkg_seq}`}>{reserv_name}</Link>
      </td>
      <td>￦{reserv_price}</td>
      <td>
        <button onClick={navigateToReview}>{review}</button>
      </td>
      <td>
        <button>{delivery}</button>
      </td>
      <td>
        <button onClick={handleShow}>{cancel}</button>
      </td>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>예약 취소</Modal.Title>
        </Modal.Header>
        <Modal.Body>예약을 취소 하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            아니오
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            네
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

export default ReservItem;
