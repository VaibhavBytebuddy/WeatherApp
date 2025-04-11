import React from 'react';
import { FaTemperatureHigh, FaTint, FaWind } from 'react-icons/fa';
import { WiDaySunny, WiRain, WiCloudy } from 'react-icons/wi';

const getWeatherIcon = (condition) => {
  switch (condition.toLowerCase()) {
    case 'rain': return <WiRain size={40} />;
    case 'clouds': return <WiCloudy size={40} />;
    default: return <WiDaySunny size={40} />;
  }
};

function WeatherCard({ weather }) {
  return (
    <div className="card p-4 shadow-sm">
      <h2 className="card-title d-flex justify-content-between align-items-center">
        {weather.city}
        {getWeatherIcon(weather.condition)}
      </h2>
      <p className="card-text"><FaTemperatureHigh /> Temp: {weather.temp}°C</p>
      <p className="card-text"><FaTint /> Humidity: {weather.humidity}%</p>
      <p className="card-text"><FaWind /> Wind: {weather.wind} km/h</p>
    </div>
  );
}

export default WeatherCard;























//colorfull icons 


// import React from "react";

// import { FaTemperatureHigh, FaTint, FaWind } from 'react-icons/fa';
// import { WiDaySunny, WiRain, WiCloudy } from 'react-icons/wi';


// const getWeatherIcon = (condition) => {
//   switch (condition.toLowerCase()) {
//     case 'rain': return <WiRain size={40} />;
//     case 'clouds': return <WiCloudy size={40} />;
//     default: return <WiDaySunny size={40} />;
//   }
// };

// const WeatherCard = ({ weather }) => {
//   return (
//     <div className="card p-4 shadow-lg">
//       <h2 className="card-title d-flex justify-content-between align-items-center">
//         {weather.city}
//         {getWeatherIcon(weather.condition)}
//       </h2>
//       <p className="card-text">🌡️ Temp: {weather.temp}&deg;C</p>
//       <p className="card-text"> 💧 Humidity: {weather.humidity}</p>
//       <p className="card-text">🌬️ Wind: {weather.wind}</p>
//      </div>
//   );
// };

// export default WeatherCard;
