import Background from './components/Background'
import Header from './components/Header'
import WeatherDayTabs from './components/WeatherDayTabs'
import { useState, useEffect } from 'react';

function App() {

  //weather tab hooks
  //State & Use State Hooks
  // const [condition, updCondition] = useState('-----');
  // const [avgTempF, updAvgTempF] = useState('-----');
  // const [maxTempF, updMaxTempF] = useState('-----');
  // const [minTempF, updMinTempF] = useState('-----');
  // const [avgHum, updAvgHum] = useState('-----');
  // const [maxWind, updMaxWind] = useState('-----');
  // const [rainChance, updRainChance] = useState('-----');
  // const [snowChance, updSnowChance] = useState('-----');
  // const [avgVis, updAvgVis] = useState('-----');
  // const [sunRise, updSunRise] = useState('-----');
  // const [sunSet, updSunSet] = useState('-----');
  const [weather, updWeather] = useState({});


  //Effect Hook
  useEffect(() => {

    const getWeather = async () => {
      const weatherData = await fetchWeather();
      console.log('weatherData: ', weatherData);
      updWeather(weatherData);
      // weatherData.forecast.forecastday.forEach((child, index) => {
      //   updCondition(weatherData.forecast.forecastday[index].day.condition.text);
      //   updAvgTempF(weatherData.forecast.forecastday[index].day.avgtemp_f);
      //   updMaxTempF(weatherData.forecast.forecastday[index].day.maxtemp_f);
      //   updMinTempF(weatherData.forecast.forecastday[index].day.mintemp_f);
      //   updAvgHum(weatherData.forecast.forecastday[index].day.avghumidity);
      //   updMaxWind(weatherData.forecast.forecastday[index].day.maxwind_mph);
      //   updRainChance(weatherData.forecast.forecastday[index].day.daily_chance_of_rain);
      //   updSnowChance(weatherData.forecast.forecastday[index].day.daily_chance_of_snow);
      //   updAvgVis(weatherData.forecast.forecastday[index].day.avgvis_miles);
      //   updSunRise(weatherData.forecast.forecastday[index].astro.sunrise);
      //   updSunSet(weatherData.forecast.forecastday[index].astro.sunset);
      // });
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
