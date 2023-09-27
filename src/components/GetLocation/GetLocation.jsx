import React from 'react';
import {useState} from 'react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Button from './Button';
import Search from './Search';



const GetLocation = () => {
  // const Api_Key = ``;

  // const search = async () => {
  //   const element = document.getElementsByClassName("form-input");
  //   if(element[0].value === ''){
  //     return 0;
  //   }
  //   const endpoint = `https://api.weatherapi.com/v1/current.json?key=&q=&aqi=no`;

  //   let response = await fetch(endpoint);
  //   let data = await response.json();
  //   console.log('data', data);
  //   const humidity = document.getElementsByClassName("humidity")
  //   const wind = document.getElementsByClassName("wind-speed")
  //   const feelsLike = document.getElementsByClassName("feels-like")
  //   const weatherDescription = document.getElementsByClassName("weather-description")
  //   const temperature = document.getElementsByClassName("temp")
  //   const location = document.getElementsByClassName("weather-location")

 
  // }

  const hanldeOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <>
    <div className="weather-form">
      <div className="form-control">
        <label htmlFor="city" className="visually-hidden">
        </label>
        <input
          id="city"
          type="text"
          className="form-input"
        ></input>
      </div>
      <Search onSearchChange={handleOnSearchChange} />
      <Button />
    </div>
    </>
  );
};

export default GetLocation;
