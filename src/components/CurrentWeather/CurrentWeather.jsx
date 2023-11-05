import React from 'react';
import Cloud from '../Icons/cloud';
import Sun from '../Icons/sun';
import CurrentTemp from './CurrentTemp';
import CurrentTime from './CurrentTime';
import WeatherDesc from './WeatherDesc';
import GetWeather from './GetWeather'; // Import the modified GetWeather component

const CurrentWeather = (props) => {
  // Render the GetWeather component to fetch data
  console.log('current weather props.temp', props.temp)
  return (
    
        <>
          <div className="weather-location">
            <p>{props.city}</p>
          </div>
          <div className="current-weather">
            <div className="icon">
              <img alt={props.currentCondition} src={props.icon} /> 
            </div>
            <div className="temp">
              <CurrentTemp temp={props.temperature} />
              <CurrentTime time="7:30" />
              <WeatherDesc description={props.currentCondition} />
            </div>
          </div>
        </>
  );
};

export default CurrentWeather;
