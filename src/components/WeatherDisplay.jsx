import React from 'react'

const WeatherDisplay = ({weather}) => {
  return (
    <div className='weather-display mt-3'>
          <h3 className='text-primary'>{weather.city} Weather</h3>
          <div className='d-flex justify-content-between align-items-center'> 
                    <span>🌡️ {weather.temp}°C</span>
                    <span>☁️ {weather.condition}</span>
          </div>
    </div>
  )
}

export default WeatherDisplay