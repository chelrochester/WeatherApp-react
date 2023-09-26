import React from 'react';
import Cloud from '../Icons/cloud';
import Sun from '../Icons/sun';
import CurrentTemp from './CurrentTemp';
import CurrentTime from './CurrentTime';
import WeatherDesc from './WeatherDesc';

const CurrentWeather = () => {
  return (
    <>
    <div className="weather-location">London</div>
        <div className="current-weather">
          <div className="icon">
            <Sun />
            <Cloud />
  
          
          </div>
          <div className="temp">
            <CurrentTemp temp="77"/>
            <CurrentTime time="7:30"/>
            <WeatherDesc description="partly cloudy"/>
          </div>
        </div>
    </>
  );
};


export default CurrentWeather;
