
import WeatherDayTab from "./WeatherDayTab";
import HorizontalScroll from 'react-scroll-horizontal'

const WeatherDayTabs = ({tabs}) => {

  console.log('WEATHER TABS: ', tabs);

  const mouseScroll = e => {
    // e.preventDefault();
    console.log('e: ', e);
    e.target.scrollLeft += e.deltaY;

  }

  return (
    <>
      <div className='container-react-scroll' >
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