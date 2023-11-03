import React from 'react';
import Cloud from '../Icons/cloud';
import Sun from '../Icons/sun';
import CurrentTemp from './CurrentTemp';
import CurrentTime from './CurrentTime';
import WeatherDesc from './WeatherDesc';
import GetWeather from './GetWeather'; // Import the modified GetWeather component

const CurrentWeather = () => {
  // Render the GetWeather component to fetch data
  return (
    <GetWeather>
      {({ city, temperature }) => (
        <>
          <div className="weather-location">
            <p>{city}</p>
          </div>
          <div className="current-weather">
            <div className="icon">
              <Sun />
              <Cloud />
            </div>
            <div className="temp">
              <CurrentTemp temp={temperature} />
              <CurrentTime time="7:30" />
              <WeatherDesc description="partly cloudy" />
            </div>
          </div>
        </>
      )}
    </GetWeather>
  );
};

export default CurrentWeather;
