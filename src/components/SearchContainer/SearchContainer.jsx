import React from 'react';
import './SearchContainer.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const SearchContainer = () => {

  return (
    <>
   
     <Link to="/Search">
    
    <div className='search-container'>
      
  
      <input type="text" placeholder='Search all the GIFS and Stickers here' />
        <div className="search-icon">
            <SearchIcon />
        </div>
      
     
     
    </div>
    </Link>
    </>
    
  )
}

export default SearchContainer