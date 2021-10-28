const Event = ({parkData}) => {

  //Destructured Park Data
  const { addresses: {  0: {city} }, fullName: name, states: state, images: { 0: { url: parkPic } } } = parkData;

  return (
    <>
      <img alt='' src={parkPic} style={{width: 320, height: 160,  marginLeft: 10, flex: '0 0 auto'}} />
      <div className='event-content'>
        <h1 style={{fontSize: 26, color: 'white', zIndex: 17, marginLeft: 20}}>
          {name}
        </h1>
        <h1 style={{fontSize: 15, color: 'white', marginTop: 7, zIndex: 17, marginLeft: 20}}>
          STATE: {state}
        </h1>
        <h1 style={{fontSize: 15, color: 'white', marginTop: 7, zIndex: 17, marginLeft: 20}}>
          CITY: {city}
        </h1>
      </div>
    </>
  )

}

export default Event;