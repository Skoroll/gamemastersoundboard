// ThemeCards.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThemeCards.scss';

function ThemeCards({ places }) {
  const navigate = useNavigate();

  const handleClick = (placeRef) => {
    navigate(`/${placeRef.toLowerCase()}`);
  };
  

  return (
    <div className="theme-cards">
      {places.map((place) => (
        <div
          key={place.refName}
          className="theme-cards__card"
          onClick={() => handleClick(place.refName)}
        >
          <img
            src={`${process.env.PUBLIC_URL}${place.icon}`}
            alt={place.name}
          />
          <p>{place.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ThemeCards;
