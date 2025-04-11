// src/components/Forecast.jsx
import { WiDaySunny, WiRain, WiCloudy } from "react-icons/wi";

const Forecast = ({ forecast }) => {
  const getWeatherIcon = (condition) => {
    if (condition.toLowerCase().includes("rain")) return <WiRain size={30} />;
    if (condition.toLowerCase().includes("cloud")) return <WiCloudy size={30} />;
    return <WiDaySunny size={30} />;
  };

  return (
    <div className="mt-4">
      <h3 className="text-center mb-3">5-Day Forecast</h3>
      <div className="row justify-content-center">
        {forecast.map((day, index) => (
          <div key={index} className="col-md-2 col-sm-4 mb-3 shadow-sm ">
            <div className="card p-2 text-center">
              <h5>{new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}</h5>
              {getWeatherIcon(day.day.condition.text)}
              <p className="mb-0">{Math.round(day.day.avgtemp_c)}°C</p>
              <small>{day.day.condition.text}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;