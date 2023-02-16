import {useState, useEffect} from "react"

const useFetchApi = () => {

    const urlGif = "http://localhost:4000/gif/";

    const [gif, setGif] = useState([]);
    const [error, setError] = useState(false);


   
    useEffect(() => {
        setError(false);
        const fetchData = async () => {
          try {
            const response = await fetch(urlGif);
            const gif = await response.json();
            setGif(gif.data);
          } catch (error) {
            setError(true);
          }
    
        };
        fetchData();
      }, [urlGif]); 


      return { error, gif}

}
export default useFetchApi;