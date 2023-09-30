import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import Button from './Button';
import Form from './Form';




const GetLocation = () => {
  
  // const hanldeOnSearchChange = (searchData) => {
  //   console.log(searchData) 
  // }

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
      <Form />
      <Button />
    </div>
    </>
  );
};

export default GetLocation;

