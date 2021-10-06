import { useState, useEffect } from 'react';
import { createClient } from 'pexels';

const Background = ({pictureQuery}) => {

  //testing
  console.log('pictureQuery: ', pictureQuery);

  //State & Use State Hooks
  const [bgImage, setBgImage] = useState('');

  //Effect Hook
  useEffect(() => {

    const getBGImages = async () => {
      const UrlFromApi = await fetchBGImage();
      setBgImage(UrlFromApi);
    }

    getBGImages();

  });

  //Async Function used in Pexels API to fetch Background Image
  const fetchBGImage = async () => {

    try {
    const client = createClient('563492ad6f9170000100000139d0d4eff1a9443e9798b3bbaed0e386');
    let query = pictureQuery;
    let randomPic = Math.floor(Math.random() * 75);
    const data = await client.photos.search({query, per_page: 74});
    console.log('Photo Data: ', data);
    let picWidth = data.photos[randomPic].width;
    let picHeight = data.photos[randomPic].height;
    let url = data.photos[randomPic].src.original;
    while (!((picWidth >= 2048 && picWidth <= 4096) && (picHeight <= 2160 && picHeight >= 1080))) {
      randomPic = Math.floor(Math.random() * 71);
      picWidth = data.photos[randomPic].width;
      picHeight = data.photos[randomPic].height;
    }
    url = data.photos[randomPic].src.original;
    console.log('Photo URL: ', url);
    return url;
    } catch (error) {
      console.log(error + ' - Displaying Default Background');
      return 'https://images.unsplash.com/photo-1462823985959-022de68638a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=2160&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTYzMzEzMTc5MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=4096';
    }

  }

  return (
    <img src={bgImage} alt='' id='background'>
    </img>
  )

}

export default Background;