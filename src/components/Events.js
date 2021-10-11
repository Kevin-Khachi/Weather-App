import {useState, useEffect } from 'react';

const Events = ({eventQuery}) => {

  console.log('eventQuery: ',eventQuery);

  const [parks, updParks] = useState({});

  useEffect(() => {
    const getParks = async () => {
      const parkData = await fetchPark();
      console.log('Park Data: ', parkData);
      updParks(parkData);
    }
    getParks();
  }, [eventQuery]);

  const fetchPark = async () => {
    const res = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=&limit=100&q=${eventQuery}&api_key=Gg0f7odlyewTGUBhgiM9SDwhYcN4tIghBaaKiW4q`);
    const data = await res.json();
    console.log('res.json(): ', data);
    // const cityParks = data[0].addresses[0].city.filter
    return data;
  }

  return (
    <>
      <div id='event-tab'>
        <h1 id='event-title'>
          Events
        </h1>
        <h1 className='events-type'>
          <span className='each-event hover' id='parks'>
            Parks
          </span>
          <span className='each-event hover' id='museums'>
            Museums
          </span>
          <span className='each-event hover' id='entertainment'>
            Entertainment
          </span>
          <span className='each-event hover' id='hotels'>
            Hotels
          </span>
          <span className='each-event hover' id='flights'>
            Flights
          </span>
        </h1>
        <h1>

        </h1>
      </div>
    </>
  )

}

export default Events;