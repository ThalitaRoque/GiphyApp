import React from 'react'
import './SearchContainer.css';

const ImageItem = ({ title, url }) => {
  return (
    <div className='imagen-gifs'>
      <div className="display-gifs">
      <img src={url} alt={title} />
      <div className="text">
              <img src="./images/giphyIconDark.png" alt = "darklogo" />
              <p>{title}</p>
            </div>

      </div>
   
     
    </div>
  )
}

export default ImageItem