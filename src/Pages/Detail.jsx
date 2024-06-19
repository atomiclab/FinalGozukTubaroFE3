import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/Detail.css";
import CardFav from "../Components/CardFav";
import { useRecipeStates } from "../Context/global.context";
import Button from "../Components/Button";

const Detail = () => {
  const [doc, setDoc] = useState({});
  const { state, dispatch } = useRecipeStates();
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  const isFavorite = state.favorites.some((fav) => fav.id === doc.id);

  const handleFavoriteClick = (doc) => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: doc });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: doc });
    }
  };

  useEffect(() => {
    dispatch({ type: "INIT_FAVORITES" });
    axios(url).then((res) => setDoc(res.data));
  }, [url]);

  return (
    <div>
      <h1>Detalles del dentista #{doc.id}</h1>
      <CardFav doc={doc}>
        <Button onClick={() => handleFavoriteClick(doc)}>
          {isFavorite ? "🚫⭐️" : "⭐️"}
        </Button>
      </CardFav>
    </div>
  );
};

export default Detail;
