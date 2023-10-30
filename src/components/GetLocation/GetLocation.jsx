import { useEffect } from 'react';
import Button from './Button';
import Form from './Form';

  
  const Api_Key = ``;
  const endpoint = `https://api.weatherapi.com/v1/current.json?`;
  
     export const getWeatherData = async () => {
      
        useEffect(() => {
          fetch(endpoint)
            .then(response => (response.json()))
            .then(data => (console.log('data', data)))
            .catch(error => {console.log(error)});
        }, [])
     }



const GetLocation = () => {
  
  return (
    <>
    <div className="weather-form">
      <Form />
      <Button />
    </div>
    </>
  );
};

export default GetLocation;

