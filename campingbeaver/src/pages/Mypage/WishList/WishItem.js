import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../MyPage.module.scss";
import Fheart from "../../../components/img/Fheart.png";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Link } from "react-router-dom";

const WishItem = ({ wishName, wishPrice, wishPic, pkg_seq }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(localStorage.userId);
  const [deleteItem, setDeleteItem] = useState({
    // user_id : id,
    user_id: "admin",
    pkg_seq: parseInt(pkg_seq),
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    console.log(deleteItem);

    axios
      .post(`/beaver/wishlist/delete`, deleteItem)
      .then((res) => {
        console.log(deleteItem);
      })
      .catch((error) => console.log("Network Error: ", error));

    setShow(false);
    window.location.replace("/Mypage/1");
  };

  return (
    <ul>
      <li>
        <Card style={{ width: "18rem", height: "22rem" }}>
          <Card.Img
            style={{ objectFit: "cover", height: "18rem" }}
            variant="top"
            src={wishPic}
          />
          <Card.Body>
            <Card.Title>
              <div>{wishName}</div>
            </Card.Title>
            <Card.Text>{wishPrice}</Card.Text>
            <div className={styles.buttonContainer}>
              <div>
                <button
                  className={styles.wish}
                  variant="primary"
                  onClick={handleShow}
                >
                  <img src={Fheart} width="40px" />
                </button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>관심 상품 삭제</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>정말로 관심 상품 목록에서 지울까요?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      아니오
                    </Button>
                    <Button variant="success" onClick={handleDelete}>
                      네
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>

              <div>
                <Link to={`/storedetail${pkg_seq}`}>
                  <Button variant="success">예약하기</Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </li>
    </ul>
  );
};

export default WishItem;
