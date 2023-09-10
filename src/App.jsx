import { useEffect, useState } from 'react';
import './App.css';
import GetLocation from './components/GetLocation';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';



function App() {
  
 
  
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // const [city, setCity] = useState('');
  // const [tempurature, setTempurature] = useState(null);
  
  // useEffect(() => {
  //   fetch(endpoint)
  //     .then(response => (response.json()))
  //     .then(data => (console.log(data)))
  //     .catch(error => {console.log(error)});
  // }, [])

  return (
    <>
      <GetLocation />
      <CurrentWeather />
      <WeatherDetails />

    </>
  );
}

export default App;
