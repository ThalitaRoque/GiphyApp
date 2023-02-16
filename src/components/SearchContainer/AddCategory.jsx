import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchContainer.css';

const AddCategory = ({setCategory}) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const searchGif = e => {
        e.preventDefault();
        if(value === "") {
            setError(true);
            return;

        }
        setError(false);
        setCategory(value);
        setValue("");
        
        // console.log("enter form")
    }


  return (
    <>
     <div className='input_search'>
        <form className='search-container' onSubmit={ searchGif }>
            <input className='input2' type="text" placeholder='Search all the GIFS and Stickers here' 
            onChange={e => setValue(e.target.value)}
            value={value}
            />
              <div className="search-icon">
            <SearchIcon />
        </div>
        </form>
        { error ?<p className="error">The field cannot be empty...</p> : ""}
        </div>
    </>
  )
}

export default AddCategory