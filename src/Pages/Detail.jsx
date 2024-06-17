import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/Detail.css";
import CardFav from "../Components/CardFav";


const Detail = () => {
  const [doc, setDoc] = useState({});
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) => setDoc(res.data));
  }, [url]);

  return (
    <div>
      <h1>Detalles del dentista n{doc.id}</h1>
      <CardFav doc={doc} />
    </div>
  );
};

export default Detail;
