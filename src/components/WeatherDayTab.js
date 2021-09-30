

const WeatherDayTab = ({day}) => {

  //Deconstructing Weather Data
  const { day: { condition: {text: condition}, avgtemp_f: avgTempF, maxtemp_f: maxTempF, mintemp_f: minTempF, avghumidity: avgHum, maxwind_mph: maxWind, daily_chance_of_rain: rainChance, daily_chance_of_snow: snowChance, avgvis_miles: avgVis}, astro: { sunrise: sunRise, sunset: sunSet }, date: tabDay } = day;

  //Declaring Date
  const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const currTabDate = new Date(tabDay + 'T00:00:00');
  const weekIndex = currTabDate.getDay()
  const formatDate = currTabDate.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: '2-digit', });

  //JSX
  return (

    <>

        <div className='tab-border'>
          <img src='https://j.theweathernetwork.com/wx_icons/v1/8.png' alt='' style={{zIndex: 11, marginLeft: 100, padding: 0, maxHeight: 140,position: 'absolute'}}></img>
            <div className='tab'>
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
       </div>

    </>
  )

}

export default WeatherDayTab;