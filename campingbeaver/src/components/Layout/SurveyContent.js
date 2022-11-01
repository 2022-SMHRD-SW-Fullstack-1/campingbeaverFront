import React from 'react'
import styles from './Survey.module.scss'
import Survey from './Survey'
import surveyimg from '../img/surveyimg.jpg'
import {Routes, Route} from 'react-router-dom';
import SurveySecond from './SurveySecond';
import SurveyThird from './SurveyThird';

const SurveyContent = () => {
  return (
    <div id="2" className={styles.mount1}>
        <Routes>
        <Route path="/" element={<Survey/>}/>
        <Route path='/surveysecond' element={<SurveySecond/>}/>
        <Route path='/surveythird' element={<SurveyThird/>}/>
        </Routes>
        
        </div>

  )
}

export default SurveyContent