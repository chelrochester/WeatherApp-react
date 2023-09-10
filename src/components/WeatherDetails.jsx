import React from 'react';

const WeatherDetails = () => {
  return(
    <>
      <div className="weather-details">
        <div className="wind-speed">
          <h4>wind speed</h4>
          <p>40mph</p>
        </div>
        <div className="humidity">
          <h4>humidity</h4>
          <p>20%</p>
        </div>
        <div className="feels-like">
          <h4>feels like</h4>
          <p>75°</p>
        </div>
      </div>
    </>
    );
};

export default WeatherDetails;
