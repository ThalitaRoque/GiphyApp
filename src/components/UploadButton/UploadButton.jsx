import React, { useState } from "react";
import { Container, Input, FormGroup } from "reactstrap";
const UploadButton = () => {
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadButton = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Gif-website");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/deg8vyjh7/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    /*  console.log(res); */
    setImages(file.secure_url);
    console.log(file.secure_url);
    setLoading(false);
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <p style={{ margin: "35px" }}>Upload Your Image Here</p>
      <FormGroup>
        <Input
          type="file"
          name="file"
          onChange={uploadButton}
          placeholder="Sube tu imagen aqui!"
        />
        {loading ? (
          <h2>Cargando Imagem...</h2>
        ) : (
          <img src={images} alt=""/>
        )}
      </FormGroup>
    </Container>
  );
};

export default UploadButton;