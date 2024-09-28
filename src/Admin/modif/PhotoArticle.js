import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PhotoArticle = () => {
  const { idArticle } = useParams();
  const [fichier, setFichier] = useState();

  const [article, setArticle] = useState({
    titre: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8085/post/${idArticle}`)
      .then((res) => setArticle(res.data[0]));
  }, []);

  const photoArticle = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", fichier);
    axios
      .put(`http://localhost:8085/photo-article/${idArticle}`, formdata)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <p>{article.titreArticle} </p>
      <form onSubmit={photoArticle}>
        <img
          style={{ height: "500px", width: "75%", marginBottom: "1rem" }}
          src={`http://localhost:8085/images-article/${article.imageArticle}`}
          alt=""
        />
        <input type="file" onChange={(e) => setFichier(e.target.files[0])} />
        <button>Valider</button>
      </form>
    </div>
  );
};

export default PhotoArticle;
