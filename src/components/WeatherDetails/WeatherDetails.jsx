import React from 'react';
import Humidity from './Humidity'
import FeelsLike from './FeelsLike'
import WindSpeed from './WindSpeed'

const WeatherDetails = () => {
  return(
    <>
      <div className="weather-details">
      <WindSpeed />
      <Humidity />
      <FeelsLike />
      </div>
    </>
    );
};

export default WeatherDetails;
