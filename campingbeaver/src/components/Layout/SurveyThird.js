import React from 'react'
import Alert from 'react-bootstrap/Alert';
import styles from './Survey.module.scss';
import Button from 'react-bootstrap/Button';


const SurveyThird = () => {
  return (
    <div style={{position: 'absolute', zIndex:3 ,margin: '3em', width: '50vw', height: '40vh', top:'30%', left:'20%'}}>
    <Alert variant="success" className={styles.overlay}>
    <Alert.Heading>어떤 테마의 캠핑을 원하시나요?</Alert.Heading>
    <p>
     테마에 맞춰 CampingBeaver가 추천하는 패키지를 만나보세요!
    </p>
    <hr />
    <p className="mb-0">
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" href="#">
        예
      </Button>
      <Button variant="secondary" size="lg" href="#">
        아니오
      </Button>
    </div>
    </p>
  </Alert>
  </div>
  )
}

export default SurveyThird