

const WeatherDayTab = ({day}) => {

  //Deconstructing Weather Data
  const { day: { condition: {text: condition}, avgtemp_f: avgTempF, maxtemp_f: maxTempF, mintemp_f: minTempF, avghumidity: avgHum, maxwind_mph: maxWind, daily_chance_of_rain: rainChance, daily_chance_of_snow: snowChance, avgvis_miles: avgVis}, astro: { sunrise: sunRise, sunset: sunSet }, date: tabDay } = day;

  //Declaring Date
  const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const currTabDate = new Date(tabDay + 'T00:00:00');
  const weekIndex = currTabDate.getDay()
  const formatDate = currTabDate.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: '2-digit', });

  //Set src for weather-icon img elem
  let weatherIconSrc = 'error';
  if (condition === 'Partly cloudy') {
    weatherIconSrc = 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png';
  }   else if (condition === 'Sunny') {
    weatherIconSrc = 'https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-14-512.png';
  } else if (condition === 'Moderate rain' || 'Patchy rain possible') {
    weatherIconSrc = 'https://maxcdn.icons8.com/Share/icon/office/Weather/rain1600.png';
  }

  //JSX
  return (

    <>

      <div className='tab'>
      <img src={weatherIconSrc} alt='' id='weather-icon'></img>
        <div id='weather'>
          <p>{week[weekIndex]}</p>
          <p style={{fontSize: 26, color: 'yellow'}}>{formatDate}</p>
          <p style={{fontSize: 26, color: 'yellow'}}>{condition}</p>
          <p style={{fontSize: 26, color: 'yellow'}}>Avg: {avgTempF} F°</p>
          <p style={{fontSize: 14}}>___________________________</p>
          <p style={{fontSize: 20}}>Max: {maxTempF} F°</p>
          <p style={{fontSize: 20}}>Min: {minTempF} F°</p>
          <p style={{fontSize: 20}}>Avg Humid: {avgHum}%</p>
          <p style={{fontSize: 20}}>Max Wind: {maxWind}MPH</p>
          <p style={{fontSize: 20}}>Rain: {rainChance}%</p>
          <p style={{fontSize: 20}}>Snow: {snowChance}%</p>
          <p style={{fontSize: 20}}>Avg Visib: {avgVis}M</p>
          <p style={{fontSize: 20}}>Sunrise: {sunRise}</p>
          <p style={{fontSize: 20}}>Sunset: {sunSet}</p>
        </div>
      </div>

    </>
  )

}

export default WeatherDayTab;