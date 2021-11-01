import Background from './components/Background';
import Header from './components/Header';
import WeatherDayTabs from './components/WeatherDayTabs';
import { useState, useEffect, /*useCallback*/ } from 'react';
import SearchBar from './components/SearchBar';
import Events from './components/Events';

function App() {

  //Use State Hook
  const [weather, updWeather] = useState({});
  const [picQuery, updPicQuery] = useState('los angeles');
  const [events, updEvents] = useState('');

  //Effect Hook
  useEffect(() => {

  }, []);

  const getEntry= async (city) => {
    console.log('city: ', city);
    console.log('getWeatherLocation: ', city);
    updPicQuery(city);
    updEvents(city);
    const weatherData = await fetchWeather(city);
    console.log('weatherData: ', weatherData);
    updWeather(weatherData);
  };

  //fetch weatherapi.com API
  const fetchWeather = async (location) => {
    console.log('fetchWeather location: ', location);
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e1612587cc4f411b99243952212409&q&q=${location}&days=10&aqi=yes&alerts=yes`);
    const data = await res.json();
    console.log('Weather Data: ', data);
    return data;
  }

  return (
    <>
      <Background pictureQuery={picQuery} />
      <div className="App">
        <Header />
        <SearchBar locationQuery={getEntry} />
        <WeatherDayTabs tabs={weather} />
        <Events eventQuery={events}/>
      </div>
    </>
  );
}

export default App;
