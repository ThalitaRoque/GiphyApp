import React from 'react'
import './MyGifs.css'
 import useFetchApi from '../../api/useFetchApi'


const MyGifs = ( ) => {
    
 const {gif} = useFetchApi();


    return (
        <>
        {gif.map((gif)=>(
            <div className="my-gifs" key={gif.id}>
            <img src={gif.img} alt={gif.title} />
            <div className="text">
              <img src="./images/giphyIconDark.png" alt = "darklogo" />
              <p>{gif.title}</p>
            </div>
            </div>
          

        ))}
        </>
      
    );
};

export default MyGifs;