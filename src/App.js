import React from 'react';
import './App.css';
import CompleteWeatherList from './weatherTable/CompleteWeatherList';
import WeatherTable from './weatherTable/Weather';

function App() {
  return (
    <div className="App">
      <title >Weather App</title>
      <main className="pb-4 pt-2">
        My Weather App
      </main>
      <WeatherTable />
      <CompleteWeatherList />
    </div>
  );
}

export default App;
