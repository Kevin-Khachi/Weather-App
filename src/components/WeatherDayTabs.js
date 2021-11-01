
import WeatherDayTab from "./WeatherDayTab";
import HorizontalScroll from 'react-scroll-horizontal';

const WeatherDayTabs = ({tabs}) => {

  console.log('TABS: ', tabs);

  return (
    <div className='weather-comp'>
      <div className='weather-title'>
        <h1 style={{fontSize: 80, color: 'beige', marginBottom: 50, marginLeft: 30, textShadow: '6px 6px 4px #282828', fontStyle: 'italic'}}>{tabs?.location?.name} {tabs?.location?.region}</h1>
      </div>
      <div className='container-react-scroll'>
        <HorizontalScroll>
        {tabs?.forecast?.forecastday.map((child, index) => {
          return <WeatherDayTab key={index} day={child} />
        })}
        </HorizontalScroll>
      </div>
    </div>
  )

}

export default WeatherDayTabs;