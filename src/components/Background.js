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
  }, [pictureQuery]);

  const isResHD = (photo) => {
    let picWidth = photo.width;
    let picHeight = photo.height;
    return (picWidth >= 1280 && picWidth <= 4096) && (picHeight <= 2160 && picHeight >= 720)
  }

  //Async Function used in Pexels API to fetch Background Image
  const fetchBGImage = async () => {
    try {
      const client = createClient('563492ad6f9170000100000139d0d4eff1a9443e9798b3bbaed0e386');
      let query = pictureQuery;
      const data = await client.photos.search({query, per_page: 20});
      console.log('Photo Data: ', data);
      let hqPhotos = data.photos.filter((photo) => isResHD(photo));
      let randomPic = Math.floor(Math.random() * hqPhotos.length);
      console.log('Random Pic: ', randomPic);
      const url = hqPhotos[randomPic].src.original;
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