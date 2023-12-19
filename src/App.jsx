import useWeatherData from './hooks/useWeatherData';
import GetLocation from './components/GetLocation/GetLocation';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import './App.css';

export default function App() {
    
    const {
        city,
        temperature,
        currentCondition,
        icon,
        windSpeed,
        humidity,
        feelsLike,
        handleCityUpdate
    } = useWeatherData();

   

    return (
        <>
            <GetLocation onUpdateCity={handleCityUpdate} city={city} />
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
