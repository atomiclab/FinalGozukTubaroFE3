import React from 'react';

const CardFav = ({ doc }) => {
  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-header">
        <img
            src="https://thispersondoesnotexist.com/"
            className="details-img"
            alt={`${doc.name}`}
          />
          <div>
            <h2 className="details-name">Nombre: {doc.name}</h2>
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
        <div className="details-actions">
          <button>FAV</button>
        </div>
      </div>
    </div>
  );
};

export default CardFav;
