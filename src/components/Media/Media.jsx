import React, { useEffect, useState } from "react";
import { fetchSearchGiphys, fetchTrendingGiphys } from "../../api/giphyApi";
import giphyArtists from "../../pages/Artists/Artists";
import TrendingGiphy from "../TrendingGiphy/TrendingGiphy";
import ArtistsGiphy from "../ArtistsGiphy/ArtistsGiphy" ;
import "./Media.css";

const Media = () => {
    const [trending, setTrending] = useState([]);
    const [artists, setArtists] = useState([]);
    

    const randomizeData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    }

    const getTrendingGiphys = async () => {
        const trending = await fetchTrendingGiphys();
        setTrending(randomizeData(trending.data));
    }

    const getArtists = async () => {
         const artists = await Promise.all(
         giphyArtists.map(async (giphyArtists)=>{
            return fetchSearchGiphys(giphyArtists)
            .then((res) => res.data.data);
        }));
        setArtists(artists.flat());
    };

 useEffect(()=> {
    getTrendingGiphys();
    getArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

    // console.log(trending, 'what it is a trending!');
    
 console.log(artists, 'what is in artists!');

  return (
    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src="./images/trending.svg" alt="trending" />
          <h1>Trending</h1>
        </div>
        <div className="trending-container">
        {trending?.map((trendingGiphy, index) => {
            return <TrendingGiphy giphy={trendingGiphy} key={index}/>
          })}
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src="./images/artists.svg" alt="artists" />
          <h1>Artists</h1>
        </div>
        <div className="artists-container">
            {/* pintar artistas */}
            {artists.map((artistsGiphy, index)=>{
                return <ArtistsGiphy giphy={artistsGiphy} key={index} />
            })}
        </div>
      </div>
      <div className="row">
        <div className="row-header">
            <img src="./images/clips.svg" alt="clips" />
          <h1>Clips</h1>
        </div>
        <div className="clips-container">
            <p>Content</p>
        </div>
      </div>
      <div className="row">
      <div className="row-header">
        <img src="./images/stories.svg" alt="stories" />
          <h1>Stories</h1>
        </div>
        <div className="stories-container">
            <p>Content</p>
        </div>
      </div>
    </div>
  );
};

export default Media;
