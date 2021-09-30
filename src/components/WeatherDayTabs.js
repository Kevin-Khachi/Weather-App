
import WeatherDayTab from "./WeatherDayTab";

const WeatherDayTabs = ({tabs}) => {

  console.log('WEATHER TABS: ', tabs);

  return (
    <>
      <div className='wrapper-flexbox'>
        {tabs.forecast && tabs.forecast.forecastday.map((child, index) => {
          return <WeatherDayTab key={index} day={child} />
        })}
      </div>
    </>
  )

}

export default WeatherDayTabs;