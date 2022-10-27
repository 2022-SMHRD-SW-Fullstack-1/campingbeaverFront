import React from 'react'
import Alert from 'react-bootstrap/Alert';
import styles from './Survey.module.scss';
import Button from 'react-bootstrap/Button';


const SurveySecond = () => {
  return (
    <div style={{position: 'absolute', zIndex:3 ,margin: '3em', width: '50vw', height: '40vh', top:'30%', left:'20%'}}>
    <Alert variant="success" className={styles.overlay}>
    <Alert.Heading>필요한 장비를 체크하세요</Alert.Heading>
    <p>
     원하는 장비가 포함된 패키지를 알려드립니다!
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

export default SurveySecond