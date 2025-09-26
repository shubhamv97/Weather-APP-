import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "2d5d1588cb944b9e9d192018251909"; // Replace with your WeatherAPI key

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setError("");
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );

      if (!response.ok) {
        throw new Error("City not found!");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>
            {weather.location.name}, {weather.location.country}
          </h2>
          <p>🌡 {weather.current.temp_c} °C</p>
          <p>☁ {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
          <p>💨 {weather.current.wind_kph} kph</p>
          <p>💧 Humidity: {weather.current.humidity}%</p>
        </div>
      )}
    </div>
  );
}
