import weatherLogo from '../images/logos/weatherapi_logo.png';
import reactLogo from '../images/logos/react_logo.png';
import npsLogo from '../images/logos/npsLogo.png';
import githubLogo from '../images/logos/githubLogo.png';
import linkedinLogo from '../images/logos/linkedinLogo.png';

const Footer = ({condition}) => {

  return (
    <div className={condition === false ? 'footer adjust-footer' : 'footer'}>
      <div id='footer-flex1'>
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          <img src={weatherLogo} alt="Weather data by WeatherAPI.com" className='logo' style={{height: 45, marginTop: 10}} />
        </a>
        <a href="https://reactjs.org/" title="React Library">
          <img src={reactLogo} alt="Javascript Library by Facebook" className='logo' style={{height: 45, marginTop: 10}} />
        </a>
        <a href="https://www.nps.gov/index.htm" title="National Park Service API" >
          <img src={npsLogo} alt="Park Data by nps.gov" className='logo' style={{height: 53, marginTop: 10}}/>
        </a>
        <a href="https://www.nps.gov/index.htm" title="National Park Service API" >
          <img src={githubLogo} alt="Park Data by nps.gov" className='logo' style={{height: 47, marginTop: 10}}/>
        </a>
        <a href="https://www.nps.gov/index.htm" title="National Park Service API" >
          <img src={linkedinLogo} alt="Park Data by nps.gov" className='logo' style={{height: 47, marginTop: 10}}/>
        </a>
      </div>
      <div className='logo' style={{fontSize: 30, color: 'white', textDecoration: 'underline', textAlign: 'center', marginTop: 6}} >
        Email: kkhachi@yahoo.com
      </div>
    </div>
  )

}

export default Footer;