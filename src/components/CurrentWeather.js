import React from 'react';

const CurrentWeather = () => {
  return (
    <>
    <div className="weather-location">London</div>
        <div className="current-weather">
          <div className="icon">
            <div className="sun"></div>
            <div className="moonContainer">
              <div className="moon"></div>
            </div>
            <div className="cloud"></div>
            <div className="thunderbolt">
              <div className="thundershape"></div>
            </div>
          </div>
          <div className="temp">
            <h1 className="current-temp">78°</h1>
            <p className="current-time">7:50p</p>
            <h3 className="weather-desc">partly cloudy</h3>
          </div>
        </div>
    </>
  );
};

{
  /* function convertCtoF(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
} */
}

export default CurrentWeather;
