import React from 'react';
import './SearchContainer.css';
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = () => {
  // const [usuarios, setUsuarios] = useState([]);
  // const [tablaUsuarios, setTablaUsuarios] = useState([]);
  // const [busqueda, setBusqueda] = useState("");

  // const peticionGet= async()=>{
  //   await axios.get fetchTrendingGiphys())
  //   .then(response=>{
  //     console.log(response.data)
  //   })
  // }

  return (
    <div className='search-container'>
        <input type="text" placeholder='Search all the GIFS and Stickers here'/>
        <div className="search-icon">
            <SearchIcon />
        </div>
    </div>
  )
}

export default SearchContainer