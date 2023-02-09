import React, { useState } from 'react';
import "./UploadButton.css";


function UploadButton ()  {
    const [image, setImage] = useState("");

    const uploadImage = async e => {
      e.preventDefault();
      console.log("Upload Imagem");
      console.log(image);
  
    }
  
    return (
        <>
      <div className='upload'>
        <img src='./images/giphyLogo.png' alt='logo'/>
       <h1>Upload</h1>
       </div>
       <div className="form">
       <form onSubmit={uploadImage}>
        <label>Imagem:</label>
        <input type="file" name="image" onChange={e => setImage(e.target.files[0])}/> <br /><br />
  
        <button className="button" type="submit">Salvar</button>
       </form>
       
      </div>
      </>
    );
  }

export default UploadButton