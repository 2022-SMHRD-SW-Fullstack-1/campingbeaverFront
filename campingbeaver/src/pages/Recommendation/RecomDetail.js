import React, { useEffect, useState } from 'react'
import Map from './Map'
import Axios from 'axios'

const RecomDetail = () => {

  const [recommendation, setRecommendation] = useState("")
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(()=>{
    Axios.get("/beaver/main").then((response)=>{

      setRecommendation(response.data);
      console.log(recommendation);
      
      if(response.data){
        // setRecommendation(response.data);
        // console.log(recommendation);
        
      }else{
        alert("failed");
      }
    })
},[])
  
  useEffect(()=>{
    setLatitude(recommendation.site_lat);
    setLongitude(recommendation.site_lng);
  })
    
  // console.log(latitude);
  // console.log(longitude);

  const decimalProps ={
    latitude,
    longitude
  }
  return (
    <div>RecomDetail
        <Map {...decimalProps}/>
        {/* {recommendation} */}
    </div>
    
  )
}

export default RecomDetail