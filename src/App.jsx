import { useEffect, useState } from "react";
import axios from "axios";
import GetLocation from './components/GetLocation/GetLocation';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import './App.css';



export default function App() {
  
  const [city, setCity] = useState('New York, NY');
  const [temperature, setTemperature] = useState('');
  const [currentCondition, setCurrentCondition] = useState();
  const [icon, setIcon] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [humidity, setHumidity] = useState();
  const [feelsLike, setFeelsLike] = useState();
  

  useEffect(() => {
      const Api_Key = ``;
      const endpoint = `http://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=${city}&aqi=no`;

      axios
      .get(endpoint)
      .then(response => {
        const data = response.data;
        setTemperature(data.current.temp_f);
        setCurrentCondition(data.current.condition.text);
        setIcon(data.current.condition.icon)
        setWindSpeed(data.current.wind_mph);
        setHumidity(data.current.humidity);
        setFeelsLike(data.current.feelslike_f)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
      
        <>
          <GetLocation />
          <CurrentWeather 
            temperature={temperature}
            city={city}
            currentCondition={currentCondition}
            icon={icon}
          />
          <WeatherDetails 
            windSpeed={windSpeed}
            humidity={humidity}
            feelsLike={feelsLike}
          />
        </>
    
  )
}



  
