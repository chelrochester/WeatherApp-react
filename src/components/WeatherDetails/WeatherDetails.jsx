import React from 'react';
import Humidity from './Humidity'
import FeelsLike from './FeelsLike'
import WindSpeed from './WindSpeed'


const WeatherDetails = (props) => {
  return(
    <>
      <div className="weather-details">
      <WindSpeed windSpeed={props.windSpeed}/>
      <Humidity humidity={props.humidity} />
      <FeelsLike feelsLike={props.feelsLike}/>
      </div>
    </>
    );
};

export default WeatherDetails;
