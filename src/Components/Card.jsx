import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ item, children }) => {
  console.log(item);
  const { name, username, id } = item;

  return (
    <div className="card">
      <Link to={"/dentista/" + id}>
        <img
          src={`https://randomuser.me/api/portraits/med/lego/${id - 1}.jpg`}
          className="card-img"
          alt={`${name}`}
        />

        <h4>{name}</h4>
        <h4>{username}</h4>
      </Link>
      {children}
    </div>
  );
};

export default Card;
