import Event from './Event';

const Events = ({eventQuery}) => {

  console.log('eventQuery: ', eventQuery);

  return (
      <div id='event-tab'>
        <h1 id='event-title'>
            Events
        </h1>
        <div className='events-type'>
          <h1 className='hover'>
            Parks
          </h1>
          <h1 className='hover'>
            Entertainment
          </h1>
          <h1 className='hover'>
            Hotels
          </h1>
          <h1 className='hover'>
            Flights
          </h1>
        </div>
        <div id='events-wrapper'>
            {eventQuery?.data?.map((child, index) => {
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