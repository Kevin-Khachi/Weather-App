const Event = ({parkData}) => {

  //Destructured Park Data
  const { url, addresses: {  0: {city, line1: street} }, contacts: { phoneNumbers: { 0: {phoneNumber: number } } }, fullName: name, states: state, images: { 0: { url: parkPic } } } = parkData;

  return (
    <>
      <img alt='' src={parkPic} style={{width: 32 + '%', height: 160,  marginLeft: 10}} />
      <div className='event-content'>
        <h1 style={{fontSize: 27, color: 'white', zIndex: 17, marginLeft: 20, marginBottom: 12}}>
          {name}
        </h1>
        <h1 style={{fontSize: 15, color: 'white', marginTop: 7, zIndex: 17, marginLeft: 20}}>
          STATE: {state}
        </h1>
        <h1 style={{fontSize: 15, color: 'white', marginTop: 7, zIndex: 17, marginLeft: 20}}>
          ADDRESS: {city}, {street}
        </h1>
        <h1 style={{fontSize: 15, color: 'white', marginTop: 7, zIndex: 17, marginLeft: 20}}>
          PHONE: {number}
        </h1>
        <h1 style={{fontSize: 15, color: 'white', marginTop: 7, zIndex: 17, marginLeft: 20}}>
          WEBSITE: {url}
        </h1>
      </div>
    </>
  )

}

export default Event;