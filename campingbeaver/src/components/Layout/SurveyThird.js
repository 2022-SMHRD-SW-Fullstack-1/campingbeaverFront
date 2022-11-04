import React from 'react'
import Alert from 'react-bootstrap/Alert';
import styles from './Survey.module.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import gamsung from '../img/gamsung.jpg';
import nature from '../img/nature.jpg';
import sea from '../img/sea.jpg'


const SurveyThird = (props) => {

  const backHandle = () => {
    props.setAnswer(null)
  }
  return (
    <div style={{
      position: 'absolute', 
      zIndex:3 ,
      margin: '3em', 
      width: '50vw', 
      height: '40vh', 
      top:'10%', 
      left:'23%', 
      textAlign:'center'}}>
    <Alert variant="light" className={styles.overlay}>
    <Alert.Heading>어떤 테마의 캠핑을 원하시나요?</Alert.Heading>
      <p>
      테마에 맞춰 CampingBeaver가 추천하는 패키지를 만나보세요!
      </p>
      <hr />
      <p className="mb-0">
      <div className="d-grid gap-2">  
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={gamsung} className={styles.imgcard} />
          <Card.Body>
            <Card.Title>감성 충만 패키지</Card.Title>
            <Card.Text>
              노을이 다했음
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><Button variant="success">더보기</Button>{' '}</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={nature}  className={styles.imgcard} />
          <Card.Body>
            <Card.Title>숲속 힐링 패키지</Card.Title>
            <Card.Text>
              과연 힐링일까?
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><Button variant="success">더보기</Button>{' '}</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={sea} className={styles.imgcard} />
          <Card.Body>
            <Card.Title>바다 패키지</Card.Title>
            <Card.Text>
              짠바람과 함께하세요!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"><Button variant="success">더보기</Button>{' '}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </div>
        <Button className={styles.sv3Btn} variant="secondary" onClick={backHandle}>뒤로가기</Button>
    </p>
  </Alert>
  </div>
  )
}

export default SurveyThird