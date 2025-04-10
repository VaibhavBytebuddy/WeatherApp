import { useState } from 'react';

import WeatherCArd from './components/WeatherCArd'
import WeatherDisplay from './components/WeatherDisplay'

function App() {

  //state to hold weather data
  const [weather,setWeather]=useState({
    city:'New York',
    temp:25,
    condition:'Sunny',
    humidity:60,
    wind:10,
  });
  
  return ( 
     <div className='app container mt-4'>
      <h1 className='text-center mb-4'>Weather App</h1>
       <WeatherCArd weather={weather} />
       <WeatherDisplay weather={weather} />
       <button 
       className='btn btn-primary mt-3'
       onClick={()=> setWeather({
        city:'London',
        temp:18,
        condition:'Rainy',
       })}
       >
        Change the London
       </button>

     </div>
       
    
  );
}

export default App
