import hamburger from '../images/icons/Hamburger.jpeg';
import cog from '../images/icons/cog.png';

const Header = () => {

  return (
    <div id='title'>
      <h1 id='title-text'>
      <img id='hamburger' style={{maxWidth: 10 + '%', marginRight: 5 + '%', marginLeft: 5 + '%', verticalAlign: 'middle'}} alt='' src={hamburger} />
      <span style={{verticalAlign: 'middle'}}>
      Weather App
      </span>
      <div id='currency-title' style={{ fontSize: 25 + 'px', marginLeft : 90 + '%', position: 'absolute', bottom: 10}}>
      Currency
      </div>
      </h1>
      <img id='hamburger' style={{maxWidth: 4.6 + '%', marginRight: 5 + '%', marginLeft: 93 + '%', marginTop: 5 + 'px'}} alt='' src={cog} />
    </div>
  )

}

export default Header;