import useWeatherData from './hooks/useWeatherData';
import GetLocation from './components/GetLocation/GetLocation';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import './App.css';



export default function App() {
  // eslint-disable-next-line
  const { city, temperature, currentCondition, icon, windSpeed, humidity, feelsLike, setCity } = useWeatherData('New York, NY');

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



  
