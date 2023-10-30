import GetLocation from './components/GetLocation/GetLocation';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';



export default function App() {
  
    
    useEffect(() => {
    const Api_Key = ``;
    const endpoint = `https://api.weatherapi.com/v1/current.json?`;
    axios
      .get(endpoint)
      .then(response => {
        console.log('data', response.data); // Log the response data
      })
      .catch(error => {
        console.log(error);
      });
    }, []);


  return (
      
        <>
          <GetLocation />
          <CurrentWeather />
          <WeatherDetails />
        </>
    
  )
}



  
