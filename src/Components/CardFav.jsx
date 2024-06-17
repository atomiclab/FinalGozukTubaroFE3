import React from "react";

const CardFav = ({ doc, children }) => {
  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-header">
          <img
            src={`https://randomuser.me/api/portraits/med/lego/${doc.id - 1}.jpg`} 
            className="details-img"
            alt={`${doc.name}`}
          />

          <div>
            <h2 className="details-name">{doc.name}</h2>
            <p className="details-info">
              <strong>Usuario:</strong> {doc.username}
            </p>
            <p className="details-info">
              <strong>Email:</strong> {doc.email}
            </p>
            <p className="details-info">
              <strong>Numero de telefono:</strong> {doc.phone}
            </p>
            <p className="details-info">
              <strong>Website:</strong> {doc.website}
            </p>
          </div>
        </div>
        <div className="details-actions">{children}</div>
      </div>
    </div>
  );
};

export default CardFav;
