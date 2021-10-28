import {useState, useEffect } from 'react';
import Event from './Event';

const Events = ({eventQuery}) => {

  console.log('eventQuery: ', eventQuery);
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
    const citiesInState = await fetch('https://gist.githubusercontent.com/ahmu83/38865147cf3727d221941a2ef8c22a77/raw/c647f74643c0b3f8407c28ddbb599e9f594365ca/US_States_and_Cities.json');
    const stateCitiesData = await citiesInState.json();
    console.log('stateCitiesData: ', stateCitiesData);
    console.log('Object.values(stateCitiesData: ', stateCitiesData);
    const stateFullNames = Object.keys(stateCitiesData).filter(state => stateCitiesData[state].some(cityName => cityName.toLowerCase().startsWith(eventQuery)));
    console.log('stateFullNames: ', stateFullNames);
    const rawAbbrevStates = await fetch('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json');
    const abbrevStatesData = await rawAbbrevStates.json();
    const stateAbbrev = Object.keys(abbrevStatesData).filter(stateFullName => abbrevStatesData[stateFullName] === stateFullNames[0]);
    console.log('stateAbbrev: ', stateAbbrev);
    const rawParkData = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbrev}&api_key=Gg0f7odlyewTGUBhgiM9SDwhYcN4tIghBaaKiW4q`);
    const parksData = await rawParkData.json();
    console.log('Parks Data: ', parksData);
    return parksData;
  }

  return (
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
        <div id='events-wrapper'>
            {parks?.data?.map((child, index) => {
              return (<div key={index} className='event' >
                        <Event parkData={child} />
                      </div>
              )
            })}
          </div>
      </div>
  )

}

export default Events;