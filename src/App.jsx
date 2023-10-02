import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import GetLocation from './components/GetLocation/GetLocation';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import './App.css';

const queryClient= new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Body />
    </QueryClientProvider>
  )
}

function Body() {
  
  const Api_Key = ``;
  const endpoint = `https://api.weatherapi.com/v1/current.json?key=${Api_Key}&q=London&aqi=no`;
  
  const fetchData = async () => {
    // Simulate an API call or fetch data from your backend
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };

  const { isLoading, isError, data, error } = useQuery('weatherData', fetchData)

  if (isLoading) return 'Loading...'

  if (isError) return 'An error has occurred: ' + error.message
  
  // useEffect(() => {
  //   fetch(endpoint)
  //     .then(response => (response.json()))
  //     .then(data => (console.log(data)))
  //     .catch(error => {console.error(error)});
  // }, [])

  return (
    <>
      <GetLocation />
      <CurrentWeather />
      <WeatherDetails />

    </>
  );
}

