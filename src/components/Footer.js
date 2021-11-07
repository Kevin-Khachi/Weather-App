import weatherLogo from '../images/logos/weatherapi_logo.png';
import reactLogo from '../images/logos/react_logo.png';
import npsLogo from '../images/logos/npsLogo.png';
import githubLogo from '../images/logos/githubLogo.png';

const Footer = ({condition}) => {

  return (
    <div className={condition === false ? 'footer adjust-footer' : 'footer'}>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img src={weatherLogo} alt="Weather data by WeatherAPI.com" style={{height: 45}} />
      </a>
      <a href="https://reactjs.org/" title="React Library">
        <img src={reactLogo} alt="Javascript Library by Facebook" style={{height: 45}} />
      </a>
      <a href="https://www.nps.gov/index.htm" title="National Park Service API" >
        <img src={npsLogo} alt="Park Data by nps.gov" style={{height: 53}}/>
      </a>
      <a href="https://www.nps.gov/index.htm" title="National Park Service API" >
        <img src={githubLogo} alt="Park Data by nps.gov" style={{height: 47}}/>
      </a>
    </div>
  )

}

export default Footer;