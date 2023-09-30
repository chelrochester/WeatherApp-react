import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import Button from './Button';




const GetLocation = () => {
  
  const hanldeOnSearchChange = (searchData) => {
    console.log(searchData) 
  }

  const cities = 'London'

  const Api_Key = ``;
  const search = `https://api.weatherapi.com/v1/search.json?key=${Api_Key}&q=${cities}&aqi=no`;
  

  useEffect(() => {
    fetch(search)
      .then(response => (response.json()))
      .then(data => (console.log(data)))
      .catch(error => {console.log(error)});
  }, [])
  
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
      
      <Button />
    </div>
    </>
  );
};

export default GetLocation;

