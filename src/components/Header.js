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
      </h1>
      <div className='hover' style={{color: 'white', fontSize: 25 + 'px', marginLeft : 40 + '%', position: 'absolute', bottom: 10, zIndex: 7}}>
      Currency
      </div>
      <div className='hover' style={{color: 'white', fontSize: 25 + 'px', marginLeft : 50 + '%', position: 'absolute', bottom: 10, whiteSpace: 'nowrap'}}>
      Real Estate
      </div>
      <div className='hover' style={{color: 'white', fontSize: 25 + 'px', marginLeft : 61.6 + '%', position: 'absolute', bottom: 10, whiteSpace: 'nowrap'}}>
      Automotive
      </div>
      <img className='hover' style={{maxWidth: 4.6 + '%', marginLeft: 93 + '%', marginTop: 5 + 'px'}} alt='' src={cog} />
    </div>
  )

}

export default Header;