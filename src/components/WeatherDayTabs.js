
import WeatherDayTab from "./WeatherDayTab";
import HorizontalScroll from 'react-scroll-horizontal';

const WeatherDayTabs = ({tabs}) => {

  return (
    <>
      <div className='container-react-scroll'>
        <HorizontalScroll>
        {tabs.forecast && tabs.forecast.forecastday.map((child, index) => {
          return <WeatherDayTab key={index} day={child} />
        })}
        </HorizontalScroll>
      </div>
    </>
  )

}

export default WeatherDayTabs;