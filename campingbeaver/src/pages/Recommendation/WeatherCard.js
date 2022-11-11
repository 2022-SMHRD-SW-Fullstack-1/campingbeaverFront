import React, { useState } from "react";
import clouds from "./weatherimg/clouds.png";
import drizzle from "./weatherimg/drizzle.png";
import mist from "./weatherimg/mist.png";
import raining from "./weatherimg/raining.png";
import snow from "./weatherimg/snow.png";
import sunny from "./weatherimg/sunny.png";
import thunderstorm from "./weatherimg/thunderstorm.png";
import style from "./Reservation.module.scss";

const WeatherCard = ({ value }) => {
  // const [iconId, setIconId] = useState(0)
  // setIconId(value.weather[0].id === 800 ? 0 : (parseInt(value.weather[0].id) / 100).toFixed(0));

  const selectIcon = () => {
    switch (
      value.weather[0].id === 800
        ? 0
        : parseInt((value.weather[0].id / 100).toFixed(0))
    ) {
      case 0:
        return <img src={sunny} height="50px" />;
      case 2:
        return <img src={thunderstorm} height="50px" />;
      case 3:
        return <img src={drizzle} height="50px" />;
      case 5:
        return <img src={raining} height="50px" />;
      case 6:
        return <img src={snow} height="50px" />;
      case 7:
        return <img src={mist} height="50px" />;
      case 8:
        return <img src={clouds} height="50px" />;
    }
  };
  return (
    <>
      {(value.dt / 60 / 60) % 6 == 0 ? (
        <td text-align="center">
          {value.dt_txt}
          {selectIcon()}
          {/* <p>{value.weather[0].id}</p> */}
          {/* <p>{(parseInt(value.weather[0].id) / 100).toFixed(0)}</p> */}
          {value.main.temp}도
        </td>
      ) : (
        <></>
      )}
    </>
  );
};

export default WeatherCard;
