import React, { useEffect, useState } from "react";
import axios from "axios";

const imageUrl = "https://dog.ceo/api/breeds/image/random";
export default function ImageFromApi() {
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get(imageUrl)
      .then((response) => setImage(response.data.message))
      .catch((error) => {
        console.error("Ошибка при загрузке файла:", error);
      });
  }, []);

  return (
    <div className="imageContainer">
      {image && <img src={image} alt="Изображение" />}
    </div>
  );
}
