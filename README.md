Weather App (React + WeatherAPI)

This is a simple Weather App built with React, HTML, CSS, and JavaScript.
It fetches real-time weather data using the WeatherAPI
.

✨ Features

Search weather by city name 🌍

Shows temperature, condition, weather icon, humidity, wind speed 🌡💨💧

Handles errors (like invalid city input) ❌

Simple & responsive UI 🎨

🚀 Technologies Used

React.js – frontend framework

CSS – styling

JavaScript (Fetch API) – to call WeatherAPI

WeatherAPI – free weather data provider

🔑 API

This project uses the WeatherAPI Current Weather endpoint:

https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=CITY_NAME&aqi=no


key → Your API key from WeatherAPI
.

q → City name (e.g., Mumbai, London).

aqi=no → Disable air quality index (optional).

Example request:

https://api.weatherapi.com/v1/current.json?key=1234567890abcdef&q=Mumbai&aqi=no

⚡ How to Run

cd weather-app

Install dependencies

npm install


Replace YOUR_API_KEY in App.js with your actual WeatherAPI key.

Run the app

npm start
