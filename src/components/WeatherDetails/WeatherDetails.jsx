import React from 'react';
import PropTypes from 'prop-types';
import Humidity from './Humidity'
import FeelsLike from './FeelsLike'
import WindSpeed from './WindSpeed'

const propTypes = {
  feelsLike: PropTypes.number,
  windSpeed: PropTypes.number,
  humidity: PropTypes.number,
};


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

WeatherDetails.propTypes = propTypes;

export default WeatherDetails;
