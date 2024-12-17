import React from "react";
import { useParams } from "react-router-dom";
import GenericSounds from "../../components/GenericSounds/GenericSounds"
import SubDetailsSounds from "../../components/SubDetailsSounds/SubDetailsSounds";
import Theme from "../../assets/Places/PlacesCards.json";
import CustomAudioPlayer from "../../components/CustomAudioPlayer/CustomAudioPlayer";
import Banner from "../../components/Banner/Banner";
import Collapses from "../../components/Collapses/Collapses";
import GoBack from "../../components/GoBack/GoBack";
import GoUp from "../../components/GoUp/GoUp";
import "./SubDetails.scss"

function SubDetails() {
  const { id, subRef } = useParams();

  // Trouve les détails du lieu
  const placeDetails = Theme.find(
    (place) => place.refName.toLowerCase() === id.toLowerCase()
  );

  if (!placeDetails) {
    return <p>Lieu introuvable.</p>;
  }

  // Trouve les détails de la sous-catégorie
  const subCategoryDetails = placeDetails.subCategories.find(
    (sub) => sub.subRef.toLowerCase() === subRef.toLowerCase()
  );

  if (!subCategoryDetails) {
    return <p>Sous-lieu introuvable.</p>;
  }

  return (
    <div className="sub-details">

      <GoBack />
      <GoUp />
      <Banner image={`${process.env.PUBLIC_URL}${subCategoryDetails.image}`} location={subCategoryDetails.name} />

      <p className="heading">Musique</p>
      <CustomAudioPlayer audioSource={subCategoryDetails.music} />

      <p className="heading">Fonds sonores</p>
      <CustomAudioPlayer audioSource={subCategoryDetails.soundscape} />

      <div className="div-sounds">
        <p className="heading">Sons</p>

        <Collapses
          defaultOpen="true"
          title={`Sons de ${subCategoryDetails.name}`}
          children={<SubDetailsSounds sounds={subCategoryDetails.sounds} />}
        />

        <Collapses
          defaultOpen="true"
          title={`Sons génériques`}
          children={<GenericSounds />} />
      </div>
    </div>
  );
}

export default SubDetails;
