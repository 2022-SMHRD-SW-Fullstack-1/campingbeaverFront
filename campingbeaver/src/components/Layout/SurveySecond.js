import React from 'react'
import Alert from 'react-bootstrap/Alert';
import styles from './Survey.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const SurveySecond = (props) => {

  const backHandle = () => {
    props.setAnswer(null)
  }

  return (
    <div style={{
      position: 'absolute', 
      zIndex:3 ,
      // margin: '3em', 
      width: '400px', 
      height: '300px', 
      top: '30%',
      left: '40%',
      textAlign:'center'}}>
    <Alert variant="light" className={styles.overlay}>
    <Alert.Heading>필요한 장비를 체크하세요</Alert.Heading>
    <p>
     원하는 장비가 포함된 패키지를 알려드립니다!
     </p>
    <hr />
    <div className="mb-0">
    <div className="d-grid gap-2">
    <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="테이블"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="의자"
            name="group2"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="랜턴"
            name="group3"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="텐트"
            name="group4"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="자충매트"
            name="group5"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="구이바다"
            name="group6"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="난로"
            name="group7"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="폴딩박스"
            name="group8"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="쉘프"
            name="group9"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="행어"
            name="group10"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="장작"
            name="group11"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="침낭"
            name="group12"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="이불베개"
            name="group13"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="식기"
            name="group14"
            type={type}
            id={`inline-${type}-2`}
          />
          {/* <Form.Check
            inline
            disabled
            label="3 (disabled)"
            type={type}
            id={`inline-${type}-3`}
          /> */}
        </div>

      ))}
      <Button className={styles.svBtn} variant="secondary" onClick={backHandle}>뒤로가기</Button>
      <Link to={`/store`}><Button className={styles.svBtn} variant="success">Search!</Button></Link>
    </Form>
    </div>
    </div>
  </Alert>
  </div>
  )
}
export default SurveySecond