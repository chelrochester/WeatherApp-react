import React from 'react';
import Humidity from './Humidity'
import FeelsLike from './FeelsLike'
import WindSpeed from './WindSpeed'
import { preprocessCSS } from 'vite';

const WeatherDetails = (props) => {
  return(
    <>
      <div className="weather-details">
      <WindSpeed windSpeed={props.WindSpeed}/>
      <Humidity humidity={props.humidity} />
      <FeelsLike feelsLike={props.feelsLike}/>
      </div>
    </>
    );
};

export default WeatherDetails;
