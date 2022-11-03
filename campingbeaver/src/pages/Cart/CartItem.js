import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../MyPage/MyPage.module.scss'
import Fheart from '../../components/img/Fheart.png'
import Modal from 'react-bootstrap/Modal';

const CartItem = ({CartName, CartPrice, CartPic}) => {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
      return (
    
    
      <ul>
        <li>
          <Card style={{ width: '18rem', height: '22rem' }}>
            <Card.Img style={{objectFit:'cover', height:'18rem'}} variant="top" src={CartPic} />
            <Card.Body>
              <Card.Title>
                <div>{CartName}</div>
              </Card.Title>
              <Card.Text>
                {CartPrice}
              </Card.Text>
              <div className={styles.buttonContainer}>
    
              <div>
              <button className={styles.wish} variant="primary" onClick={handleShow}>
              <img src={Fheart} width='40px' /></button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>장바구니 상품 삭제</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  정말로 장바구니 목록에서 지울까요?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    아니오
                  </Button>
                  <Button variant="primary">네</Button>
                </Modal.Footer>
              </Modal>
              </div>
    
              <div><Button variant="primary">예약하기</Button></div>
              </div>
            </Card.Body>
          </Card>
        </li>
        
      </ul>
    
    
      )
    }
    
    export default CartItem