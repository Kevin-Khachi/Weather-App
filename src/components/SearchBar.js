const SearchBar = ({locationQuery}) => {

  const tabFallAnim = (event) => {
    if (event.code === 'Enter' || event.type ==='click') {
      console.log('You pressed Enter!');
      const entry = event.target.value;
      console.log('Entry: ', entry);
      locationQuery(entry);
      event.target.value = '';
    }
  }

  const searchButton = () => {

  }

  return (

    <>
      <input id='search-bar' placeholder='Enter city' type='text' onKeyDown={tabFallAnim} />
      <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5621738.jpg' onClick={tabFallAnim} alt='' id='mag-glass-icon' />
    </>

  )

}

export default SearchBar;