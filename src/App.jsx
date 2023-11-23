import React, { useState } from 'react';
import useWeatherData from './hooks/useWeatherData';
import GetLocation from './components/GetLocation/GetLocation';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import './App.css';

export default function App() {
    const [city, setCity] = useState('New York, NY');
    const { temperature, currentCondition, icon, windSpeed, humidity, feelsLike } = useWeatherData(city);

    const handleCityUpdate = (newCity) => {
        setCity(newCity);
    };

    return (
        <>
            <GetLocation onUpdateCity={handleCityUpdate} />
            <CurrentWeather
                temperature={temperature}
                currentCondition={currentCondition}
                icon={icon}
            />
            <WeatherDetails
                windSpeed={windSpeed}
                humidity={humidity}
                feelsLike={feelsLike}
            />
        </>
    );
}