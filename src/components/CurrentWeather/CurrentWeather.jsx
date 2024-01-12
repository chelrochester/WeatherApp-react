import React from 'react';
import PropTypes from 'prop-types';
// import Cloud from '../Icons/cloud';
// import Sun from '../Icons/sun';
import CurrentTemp from './CurrentTemp';
import WeatherDesc from './WeatherDesc';

const propTypes = {
  currentCondition: PropTypes.string,
  temperature: PropTypes.number,
  cityInput: PropTypes.func,
  city: PropTypes.string,
  icon: PropTypes.string
};

const CurrentWeather = (props) => {
  // Render the GetWeather component to fetch data
  
  return (
    
        <>
          <div className="weather-location">
            <p>{props.cityInput || "What's the weather like today"}</p>
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
