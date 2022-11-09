import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './Reservation.module.scss'
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherShower, TiWeatherDownpour, TiWeatherSnow, TiWeatherStormy } from "react-icons/ti";
import { BsCloudFog } from "react-icons/bs";
import WeatherCard from './WeatherCard';

const WeatherView = ({latitude, longitude}) => {

    let url = ''

    const [des, setDes] = useState('')
    const [temp, setTemp] = useState(0)
    const [id, setId] = useState()
    const [iconId, setIconId] = useState()
    const [weatherList, setWeatherList] = useState([])

    // const getCurrentLocation = () => {
    //     navigator.geolocation.getCurrentPosition(()=>{
    //         getWeatherData(latitude,longitude)
    //     })
    // }
    const getWeatherData = () => {
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${'c2cba6fdf07202e294f82e9303beffff'}&units=metric`
        axios.get(url)
            .then((res)=>{
                // console.log(res.data.list)
                setWeatherList(res.data.list)
                    console.log('weatherlist:',weatherList)
                // setCity(res.data.name)
                // setDes(res.data.weather[0].description)
                // setTemp(res.data.main.temp)
                // setId(res.data.weather[0].id)
                // console.log(id)
                // setIconId(id === 800 ? 0 : (parseInt(id) / 100).toFixed(0));
                // console.log(iconId) 
            })
            .catch(()=>{console.log('error')})
    }

    
    const selectIcon = () => {
        console.log("switch문",iconId)
    

        
        switch (iconId) {
            case 0:
              return <TiWeatherSunny size="5rem" color="red" />;
            case 2:
              return <TiWeatherStormy size="5rem" color="black" />;
            case 3:
              return <TiWeatherShower size="5rem" color="blue" />;
            case 5:
              return <TiWeatherDownpour size="5rem" color="navy" />;
            case 6:
              return <TiWeatherSnow size="5rem" color="white" />;
            case 7:
              return <BsCloudFog size="5rem" color="white" />;
            case 8:
              return <TiWeatherCloudy size="5rem" color="white" />;
          }
      
      };
   
    
    useEffect(()=>{
        getWeatherData()
      },[latitude,longitude])
      
      console.log(weatherList)
  return (
    <div className={style.weather}>
        
      <table>
        {/* {selectIcon()} */}
       {/* response.data.filter(value=>value.pkg_hash.includes(selectParams())) */}
        {weatherList.map(
            value => (<WeatherCard value={value}/>)
        )}
      </table>
        
        
    </div>
  )
}

export default WeatherView