import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Theme from "../../assets/Places/PlacesCards.json"
import GoBack from "../../components/GoBack/GoBack";
import "./PlaceDetails.scss";

function PlaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Trouve les détails du lieu
  const placeDetails = Theme.find(
    (place) => place.refName.toLowerCase() === id.toLowerCase()
  );

  if (!placeDetails) {
    return <p>Lieu introuvable.</p>;
  }

  // Fonction pour gérer le clic sur une sous-catégorie
  const handleClick = (subRef) => {
    navigate(`/${placeDetails.refName.toLowerCase()}/${subRef.toLowerCase()}`);
  };
  

  return (
    <div className="place-details">
      <GoBack />
      <Banner image={`${process.env.PUBLIC_URL}${placeDetails.icon}`} location={placeDetails.name} flavorText={placeDetails.description } />
      <div className="theme-cards">
        {placeDetails.subCategories.map((subCategory) => (
          <div
            key={subCategory.subRef}
            className="theme-cards__card"
            onClick={() => handleClick(subCategory.subRef)}
          >
            <img
              src={`${process.env.PUBLIC_URL}${subCategory.image || ""}`}
              alt={subCategory.name}
            />
            <p>{subCategory.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceDetails;
