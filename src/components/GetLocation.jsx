import React from 'react';
import {useState} from 'react';
import WeatherDetails from './WeatherDetails';
import CurrentWeather from './CurrentWeather';

const label = 'Enter city name';

const GetLocation = () => {
  const Api_Key = ``;

  const search = async () => {
    const element = document.getElementsByClassName("form-input");
    if(element[0].value === ''){
      return 0;
    }
    const endpoint = `https://api.weatherapi.com/v1/current.json?key=&q=${element[0].value}&aqi=no`;

    let response = await fetch(endpoint);
    let data = await response.json();
    console.log('data', data);
    const humidity = document.getElementsByClassName("humidity")
    const wind = document.getElementsByClassName("wind-speed")
    const feelsLike = document.getElementsByClassName("feels-like")
    const weatherDescription = document.getElementsByClassName("weather-description")
    const temperature = document.getElementsByClassName("temp")
    const location = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML = data.current.humidity;
    wind[0].innerHTML = data.current.wind_speed;
    feelsLike[0].innerHTML = data.current.feelslike;
    weatherDescription[0].innerHTML = data.current.weather_description;
    temperature[0].innerHTML = data.current.temperature;
    location[0].innerHTML = data.location.name;
  }

  return (
    <>
    <div className="weather-form">
      <div className="form-control">
        <label htmlFor="city" className="visually-hidden">
          {label}
        </label>
        <input
          id="city"
          type="text"
          placeholder={label}
          className="form-input"
        ></input>
      </div>
      <button className="btn" onClick={() => {search()}}>Get Weather</button>
    </div>
    </>
  );
};

export default GetLocation;
