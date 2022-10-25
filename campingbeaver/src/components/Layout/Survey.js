import React from 'react'
import Alert from 'react-bootstrap/Alert';
import styles from './Survey.module.scss';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const Survey = () => {

  return (
    <div style={{position: 'absolute', zIndex:3 ,margin: '3em', width: '50vw', height: '40vh', top:'30%', left:'20%'}}>
    <Alert variant="success" className={styles.overlay}>
    <Alert.Heading>캠핑 장비가 있으신가요?</Alert.Heading>
    <p>
     장비를 직접 선택하시려면 '예'를 선택하세요
    </p>
    <hr />
    <p className="mb-0">
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg"><Link to="/surveysecond" style={{ textDecoration: "none", color: 'white' }}>
        예</Link>
      </Button>
      <Button variant="secondary" size="lg"><Link to="/surveythird" style={{ textDecoration: "none", color: 'white' }}>
        아니오</Link>
      </Button>
    </div>
    </p>
  </Alert>
 </div>
  )
}

export default Survey