const SearchBar = () => {

  const tabFallAnim = () => {
    console.log("You pressed Enter!");
  }

  const red = 'red';

  return (

    <>
      <input id='search-bar' type='text' onKeyDown={tabFallAnim} />
      <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5621738.jpg' alt='' id='mag-glass-icon' />
    </>

  )

}

export default SearchBar;