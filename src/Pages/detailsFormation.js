import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsFormation = () => {
  const lien = "https://empire-backend.fizitech.org";
  const { idFormation } = useParams();
  const [formation, setFormation] = useState([]);

  useEffect(() => {
    axios
      .get(`${lien}/formation/${idFormation}`)
      .then((res) => {
        setFormation(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Details">
      <div className="contenu">
        <img
          src={`${lien}/images-formations/${formation.imageFormation}`}
          alt=""
        />
        <h3>{formation.intituleFormation}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: formation.descriptFormation }}
        />
      </div>
    </div>
  );
};

export default DetailsFormation;
