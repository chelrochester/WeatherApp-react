const Api_Key = ``;
const endpoint = `https://api.weatherapi.com/v1/current.json?`;

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`${endpoint}key=${Api_Key}&q=${city}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};