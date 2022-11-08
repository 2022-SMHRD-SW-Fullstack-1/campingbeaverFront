import React, { useState } from 'react'
import clouds from './weatherimg/clouds.png'
import drizzle from './weatherimg/drizzle.png'
import mist from './weatherimg/mist.png'
import raining from './weatherimg/raining.png'
import snow from './weatherimg/snow.png'
import sunny from './weatherimg/sunny.png'
import thunderstorm from './weatherimg/thunderstorm.png'

const WeatherCard = ({value}) => {
    // const [iconId, setIconId] = useState(0)
    // setIconId(value.weather[0].id === 800 ? 0 : (parseInt(value.weather[0].id) / 100).toFixed(0));
    const selectIcon = () => {
        switch (value.weather[0].id === 800 ? 0 : (parseInt(value.weather[0].id) / 100).toFixed(0))
        {
            case 0:
              return <img src={sunny}/>;
            case 2:
              return <img src={thunderstorm}/>;
            case 3:
              return <img src={drizzle}/>;
            case 5:
              return <img src={raining}/>;
            case 6:
              return <img src={snow}/>;
            case 7:
              return <img src={mist}/>;
            case 8:
              return <img src={clouds}/>;
          }
        }
  return (
    <div>
        <p>{value.dt_txt}</p>
        <p>{selectIcon()}</p>
        <p>{value.weather[0].id}</p>
        <p>{(parseInt(value.weather[0].id) / 100).toFixed(0)}</p>
        <p>{value.main.temp}도</p>
    </div>
  )
}

export default WeatherCard