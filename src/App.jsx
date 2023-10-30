import { useEffect, useState } from 'react';
import { useFetch } from 'react';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import GetLocation from './components/GetLocation/GetLocation';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import { getWeatherData } from './components/GetLocation/GetLocation';
import './App.css';

// const queryClient= new QueryClient()

export default function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try{
      const data = await getWeatherData(city);
    }catch{
      console.log(error.message);
    }
  }

  return (
      
        <>
          <GetLocation />
          <CurrentWeather />
          <WeatherDetails />
      
        </>
    
    // <QueryClientProvider client={queryClient}>
    //   <Body />
    // </QueryClientProvider>
  )
}


  
  //   // Simulate an API call or fetch data from your backend
  //   const response = await fetch(endpoint);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch data');
  //   }
  //   return response.json();
  // };

  // const { isLoading, isError, data, error } = useQuery('weatherData', fetchData)

  // if (isLoading) return 'Loading...'

  // if (isError) return 'An error has occurred: ' + error.message
  
