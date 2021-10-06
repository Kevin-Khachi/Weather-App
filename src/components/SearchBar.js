const SearchBar = ({locationQuery}) => {

  const tabFallAnim = (event) => {
    if (event.code === 'Enter') {
      console.log('You pressed Enter!');
      console.log('Event: ', event.target.value);
      locationQuery(event.target.value)
    }
  }

  return (

    <>
      <input id='search-bar' placeholder='Enter city, zip, location' type='text' onKeyDown={tabFallAnim} />
      <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5621738.jpg' onClick={tabFallAnim} alt='' id='mag-glass-icon' />
    </>

  )

}

export default SearchBar;