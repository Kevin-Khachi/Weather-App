import Event from './Event';

const Events = ({eventQuery}) => {

  console.log('eventQuery: ', eventQuery);

  return (
      <div id='event-tab'>
        <div id='event-title'>
            Parks
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