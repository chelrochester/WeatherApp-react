import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Button from './Button';
import Form from './Form';

  
  const Api_Key = `e9b4db9948cc4627a39130023231009`;
  const endpoint = `https://api.weatherapi.com/v1/current.json?`;
  
  export const getWeatherData = async () => {
    try {
      const {data} = await axios.get(endpoint + `key=${Api_Key}&q=${city}`);
      return data;
    } catch {
      throw error;
    }
  }



const GetLocation = () => {
  
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

