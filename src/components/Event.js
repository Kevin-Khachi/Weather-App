const Event = ({parkData}) => {

  //Destructure Park Data
  const { addresses: {  0: {city} }, fullName: name, states: state, images: { 0: { url: parkPic } } } = parkData;

  return (
    <>
      <img alt='' src={parkPic} style={{width: 320, height: 160,  marginLeft: 20, marginTop: 50,}} />
      <h1 style={{fontSize: 20, color: 'white', zIndex: 17, marginLeft: 20}}>
        Name: {name}
      </h1>
      <h1 style={{fontSize: 17, color: 'white', zIndex: 17, marginLeft: 20}}>
        States: {state}
      </h1>
      <h1 style={{fontSize: 17, color: 'white', zIndex: 17, marginLeft: 20}}>
        City: {city}
      </h1>
    </>
  )

}

export default Event;