import React from 'react';
import './App.css';
import CompleteWeatherList from './weatherTable/CompleteWeatherList';
import WeatherTable from './weatherTable/Weather';

function App() {
  return (
    <div className="App">
      <title>Weather App</title>
      <WeatherTable />
      <CompleteWeatherList />
    </div>
  );
}

export default App;
