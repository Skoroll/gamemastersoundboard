import React, { useState } from "react";
import genericSoundsJSON from "../../assets/GenericSounds.json";
import CustomAudioPlayer from "../CustomAudioPlayer/CustomAudioPlayer";
import "./GenericSounds.scss"

function GenericSounds() {
  // État pour gérer la piste en cours
  const [currentTrack, setCurrentTrack] = useState({
    name: genericSoundsJSON[0]?.name || "Aucun son disponible",
    sound: genericSoundsJSON[0]?.sound || "",
  });

  // Gestion du clic pour changer de piste
  const handleTrackChange = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="generic-sounds">
      {/* Lecteur audio pour la piste sélectionnée */}
      <div className="generic-sounds__player">

        {currentTrack.sound ? (
          <CustomAudioPlayer audioSource={currentTrack.sound} />
        ) : (
          <p>Aucun son sélectionné.</p>
        )}
      </div>
      {/* Liste des sons */}
      <div className="generic-sounds__list">
        <ul>
        {genericSoundsJSON
          .filter((sound) => sound.name && sound.sound) // Filtrer les sons valides
          .map((sound) => (
            <li
              key={sound.id}
              className={`generic-sounds__list--item btn ${
                currentTrack.sound === sound.sound ? "active" : ""
              }`}
              onClick={() => handleTrackChange(sound)} // Change la piste au clic
              style={{ cursor: "pointer" }}
            >
              {sound.icon}
              {sound.name}
            </li>
          ))}
          </ul>
      </div>

    </div>
  );
}

export default GenericSounds;
