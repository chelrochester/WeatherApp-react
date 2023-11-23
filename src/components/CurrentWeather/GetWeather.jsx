import { useEffect, useState } from "react";
import axios from "axios";

export default function getWeather() {
    const [city, setCity] = useState('Omaha');
    const [temperature, setTemperature] = useState('');

    useEffect(() => {
        const Api_Key = ``;
        const endpoint = `https://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=${location}`;

        axios
        .get(endpoint)
        .then(response => {
          const data = response.data;
          setCity(data.location.name);
          setTemperature(data.current.temp_f);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    };