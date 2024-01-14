import React from 'react';
import PropTypes from 'prop-types';
// import Cloud from '../Icons/cloud';
// import Sun from '../Icons/sun';
import CurrentTemp from './CurrentTemp';
import WeatherDesc from './WeatherDesc';

const propTypes = {
  currentCondition: PropTypes.string,
  temperature: PropTypes.number,
  submitted: PropTypes.func,
  cityInput: PropTypes.string,
  icon: PropTypes.string
};

const CurrentWeather = (props) => {
  
  return (
    
        <>
          <div className="weather-location">
            <p>{props.submitted ? props.cityInput : "What's the weather like today"}</p>
          </div>
          <div className="current-weather">
            <div className="icon">
              <img alt={props.currentCondition} src={props.icon} /> 
            </div>
            <div className="temp">
              <CurrentTemp temp={props.temperature} />
              <WeatherDesc description={props.currentCondition} />
            </div>
          </div>
        </>
  );
};

CurrentWeather.propTypes = propTypes;

export default CurrentWeather;
