import Background from './components/Background'
import Header from './components/Header'
import WeatherDayTabs from './components/WeatherDayTabs'
import { useState, useEffect } from 'react';

function App() {

  const [weather, updWeather] = useState({});


  //Effect Hook
  useEffect(() => {

    const getWeather = async () => {
      const weatherData = await fetchWeather();
      console.log('weatherData: ', weatherData);
      updWeather(weatherData);

    };

    getWeather();

  }, []);

  //fetch weatherapi.com API
  const fetchWeather = async () => {

    const res = await fetch('https://api.weatherapi.com/v1/forecast.json?key=e1612587cc4f411b99243952212409&q&q=los angeles&days=10&aqi=yes&alerts=yes');
    const data = await res.json();
    console.log('Weather Data: ', data);
    return data;

  }

  return (
    <div className="App">
      <Background />
      <Header test={10}/>
      <WeatherDayTabs tabs={weather} />
    </div>
  );
}

export default App;
