import { useState ,useEffect} from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';
import { fetchWeather } from './services/weatherService';
import Forecast from './components/Forecast';
import Loader from './components/Loader';

function App() {
  const [weather, setWeather] = useState({
    city: 'New York',
    temp: 25,
    condition: 'Sunny',
    humidity: 60,
    wind: 10,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  //for local storage

  // In App.jsx
useEffect(() => {
  const savedCity = localStorage.getItem('lastCity');
  if (savedCity) handleSearch(savedCity);
}, []);

const handleSearch = async (city) => {
  localStorage.setItem('lastCity', city); // Save search
  // ... rest of your code


  // src/App.jsx

  try {
    setLoading(true);
    const data = await fetchWeather(city);
    
    setWeather({
      city: data.location.name,
      temp: Math.round(data.current.temp_c),
      condition: data.current.condition.text,
      humidity: data.current.humidity,
      wind: data.current.wind_kph,
      forecast: data.forecast.forecastday.slice(1), // Skip today (next 4 days)
    });
    
    setError('');
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
  
  return (
    <div className='app container mt-4'>
      <h1 className='text-center mb-4'>Weather App</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      
      {error && <p className='text-danger text-center'>{error}</p>}
      <WeatherCard weather={weather} />
      {/* <WeatherDisplay weather={weather} />
      <button 
        className='btn btn-primary mt-3'
        onClick={() => setWeather({
          city: 'London',
          temp: 18,
          condition: 'Rainy',
          humidity: 80,
          wind: 15,
        })}
      >
        Change to London
      </button> */}
      {weather.forecast && <Forecast forecast={weather.forecast} />}
    </div>
  );
}

export default App;