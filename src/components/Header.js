import hamburger from '../images/icons/Hamburger.jpeg';

const Header = () => {

  return (
    <div id='title'>
      <h1 id='title-text'>
      <img style={{maxWidth: 10 + '%', marginRight: 5 + '%', marginLeft: 5 + '%', verticalAlign: 'middle'}} alt='' src={hamburger} />
      <span style={{verticalAlign: 'middle'}}>
      Weather App
      </span>
      </h1>
    </div>
  )

}

export default Header;