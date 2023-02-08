import React from 'react';
import "./ArtistsGiphy.css";

const ArtistsGiphy = ({ giphy }) => {
  return (
    <div className='artist-giphy'>
        <img src={giphy.images.downsized.url} alt={giphy.title} />
    </div>
  )
}

export default ArtistsGiphy