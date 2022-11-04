import Alert from 'react-bootstrap/Alert';
import styles from './Survey.module.scss';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import SurveySecond from './SurveySecond';
import SurveyThird from './SurveyThird';
const Survey = () => {

  const [answer,setAnswer] = useState(null);

  const yesHandle = () => {
    setAnswer(true)
  }

  const noHandle = () => {
    setAnswer(false)
  }


  return (
    <>
      <div className='picContainer'>
        <img className={styles.mainpic} src='https://www.snowpeak.co.kr/upload_files/main_brand/220225_Brand_main.jpg'/>
      </div>
        { answer == null && (
      <div className={styles.surveyWrap} >
        <Alert variant="light" className={styles.overlay}>
        <Alert.Heading>캠핑 장비가 있으신가요?</Alert.Heading>
            <p>
            필요한 장비를 직접 선택하시려면 '예'를 선택하세요
            </p>
            <hr />
            <p className="mb-0">
            <div className="d-grid gap-2">
              <Button variant="success" size="lg" onClick={yesHandle}>
                예
              </Button>
              <Button variant="secondary" size="lg" onClick={noHandle}>
                아니오
              </Button>
            </div>
            </p>
            </Alert>
        </div>)}
                
          { answer == true && (<SurveySecond setAnswer={setAnswer}/>)}
          { answer == false && (<SurveyThird setAnswer={setAnswer}/>)}
      </>
  )
}
export default Survey