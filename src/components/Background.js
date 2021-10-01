import { useState, useEffect } from 'react';
import { createClient } from 'pexels';

const Background = () => {

  //State & Use State Hooks
  const [bgImage, setBgImage] = useState('');

  //Effect Hook
  useEffect(() => {

    const getBGImages = async () => {
      const UrlFromApi = await fetchBGImage();
      setBgImage(UrlFromApi);
    }

    getBGImages();

  }, []);

  //Async Function used in Pexels API to fetch Background Image
  const fetchBGImage = async () => {

    try {
    const client = createClient('563492ad6f9170000100000139d0d4eff1a9443e9798b3bbaed0e386');
    let query = 'Los Angeles';
    let randomPic = Math.floor(Math.random() * 71);
    const data = await client.photos.search({query, per_page: 70});
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
      return 'https://source.unsplash.com/4096x2160/?nature,water';
    }

  }

  return (
    <img src={bgImage} alt='' id='background'>
    </img>
  )

}

export default Background