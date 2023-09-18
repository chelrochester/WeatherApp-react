import { useEffect, useState } from 'react';
import './App.css';
import GetLocation from './components/GetLocation';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';



function App() {
  
  const Api_Key = ``;
  const endpoint = `https://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=London&aqi=no`;
  
  // can these all use one state since they update together?  How would that look?
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // const [city, setCity] = useState('');
  // const [tempurature, setTempurature] = useState(null);
  
  useEffect(() => {
    fetch(endpoint)
      .then(response => (response.json()))
      .then(data => (console.log(data)))
      .catch(error => {console.log(error)});
  }, [])

  return (
    <>
      <GetLocation />
      <CurrentWeather />
      <WeatherDetails />

    </>
  );
}

export default App;
