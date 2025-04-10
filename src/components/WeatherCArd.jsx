import React from 'react'

const WeatherCArd = ({weather}) => {
  return (
    <div className='card p-4 shadow-lg'>
          <h2 className='card-title'>{weather.city}</h2>
          <p className='card-text'>🌡️ Temp: {weather.temp}&deg;C</p>
          <p className='card-text'> ☁️Condition: {weather.condition}</p>
          <p className='card-text'> 💧 Humidity: {weather.humidity}</p>
          <p className='card-text'>🌬️ Wind: {weather.wind}</p>
    </div>
  )
}

export default WeatherCArd