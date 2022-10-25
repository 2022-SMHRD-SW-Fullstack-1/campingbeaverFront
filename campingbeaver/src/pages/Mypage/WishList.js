import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../components/img/tentcamping.jpg'
import styles from './MyPage.module.scss'
const WishList = () => {
  return (
      <div>
        <div className={styles.top}>
          <h1 className={styles.contact}>
          Wish List
          </h1>
          <p className={styles.contact1}>관심상품</p>
        </div>


        <div>
          <ul>
            <li>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>피크닉 패키지</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">예약하기</Button>
                </Card.Body>
              </Card>
            </li>
            <li>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>피크닉 패키지</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">예약하기</Button>
                </Card.Body>
              </Card>
            </li>
            <li>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>피크닉 패키지</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">예약하기</Button>
                </Card.Body>
              </Card>
            </li>
          </ul>
        
        </div>
    </div>
  )
}

export default WishList