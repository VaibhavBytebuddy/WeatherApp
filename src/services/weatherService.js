// src/services/weatherService.js

//https://www.weatherapi.com/  go here for api
//const API_KEY = 'YOUR_WEATHERAPI_KEY';


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // Vite's special syntax
// for accessing environment variables


export async function fetchWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
  );
  if (!response.ok) throw new Error('City not found');
  return response.json();
}
