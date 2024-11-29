import { useEffect, useState } from 'react';
import axios from 'axios';

const useWeatherData = () => {
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState();
    const [currentCondition, setCurrentCondition] = useState();
    const [icon, setIcon] = useState();
    const [windSpeed, setWindSpeed] = useState();
    const [humidity, setHumidity] = useState();
    const [feelsLike, setFeelsLike] = useState();
    const [cityInput, setCityInput] = useState();
    const [submitted, setSubmitted] = useState();
  
    useEffect(() => {
      const Api_Key = import.meta.env.VITE_API_KEY;
      if (!Api_Key) {
        console.error("API Key is missing!");
        return;
      }
      console.log(import.meta.env.VITE_API_KEY);

      const endpoint = `https://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=${city}&aqi=no`;
  
      axios
        .get(endpoint)
        .then(response => {
          const data = response.data;
          setCity(data.location.name)
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
    }, [city]);

    function handleCityUpdate(e) {
      e.preventDefault();
      setSubmitted(false);
      setCityInput(e.target.value);
      console.log('handleCity');
  }

  function handleClick() {
    setSubmitted(true);
    setCity(cityInput);
  }
  
    return {
      city,
      temperature,
      currentCondition,
      icon,
      windSpeed,
      humidity,
      feelsLike,
      handleCityUpdate,
      handleClick,
      cityInput,
      submitted,
    };
  };

  export default useWeatherData;