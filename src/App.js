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
  const [events, updEvents] = useState({});
  const [enteredQuery, updEnteredQuery] = useState(false);

  //Effect Hook
  useEffect(() => {

  }, []);

  let query;

  //function thats used in SearchBar.js that pulls data out for use in upper level App.js
  const getEntry = async (city) => {
    query = city;
    updEnteredQuery(true);
    console.log('city: ', city);
    console.log('getWeatherLocation: ', city);
    updPicQuery(city);
    const weatherData = await fetchWeather(city);
    console.log('weatherData: ', weatherData);
    updWeather(weatherData);
    const parkData = await fetchPark();
    console.log('Park Data: ', parkData);
    updEvents(parkData);
  };

  //fetch weatherapi.com API
  const fetchWeather = async (location) => {
    console.log('fetchWeather location: ', location);
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e1612587cc4f411b99243952212409&q&q=${location}&days=10&aqi=yes&alerts=yes`);
    const data = await res.json();
    console.log('Weather Data: ', data);
    return data;
  }

  //fetch from npa.gov and city state abbrev json data
  const fetchPark = async () => {
    const citiesInState = await fetch('https://gist.githubusercontent.com/ahmu83/38865147cf3727d221941a2ef8c22a77/raw/c647f74643c0b3f8407c28ddbb599e9f594365ca/US_States_and_Cities.json');
    const stateCitiesData = await citiesInState.json();
    console.log('stateCitiesData: ', stateCitiesData);
    console.log('Object.values(stateCitiesData: ', stateCitiesData);
    const stateFullNames = Object.keys(stateCitiesData).filter(state => stateCitiesData[state].some(cityName => cityName.toLowerCase().startsWith(query)));
    console.log('stateFullNames: ', stateFullNames);
    const rawAbbrevStates = await fetch('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json');
    const abbrevStatesData = await rawAbbrevStates.json();
    const stateAbbrev = Object.keys(abbrevStatesData).filter(stateFullName => abbrevStatesData[stateFullName] === stateFullNames[0]);
    console.log('stateAbbrev: ', stateAbbrev);
    const rawParkData = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbrev}&api_key=Gg0f7odlyewTGUBhgiM9SDwhYcN4tIghBaaKiW4q`);
    const parksData = await rawParkData.json();
    console.log('Parks Data: ', parksData);
    return parksData;
  }

  return (
    <>
      <Background pictureQuery={picQuery} />
      <div className="App">
        <Header />
        <SearchBar locationQuery={getEntry} />
        {enteredQuery === true ? <WeatherDayTabs tabs={weather} /> : '' }
        {enteredQuery === true ?  <Events eventQuery={events} /> : ''}
      </div>
    </>
  );
}

export default App;
