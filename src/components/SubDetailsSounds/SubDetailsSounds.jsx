import React, { useState } from "react";
import CustomAudioPlayer from "../CustomAudioPlayer/CustomAudioPlayer";
import "../GenericSounds/GenericSounds.scss"

function SubDetailsSounds({ sounds }) {
  // État pour gérer la piste en cours
  const [currentTrack, setCurrentTrack] = useState(
    sounds.length > 0
      ? { name: sounds[0]?.name || "Aucun son disponible", sound: sounds[0]?.sound || "" }
      : null
  );

  // Gestion du clic pour changer de piste
  const handleTrackChange = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="sub-details-sounds">
      {/* Lecteur audio pour la piste sélectionnée */}
      <div className="sub-details-sounds__player">
        {currentTrack && currentTrack.sound ? (
          <CustomAudioPlayer audioSource={currentTrack.sound} />
        ) : (
          <p>Aucun son disponible.</p>
        )}
      </div>

      {/* Liste des sons */}
      <div className="sub-details__list">
        <ul>
          {sounds
            .filter((sound) => sound.name && sound.sound) // Filtrer les sons valides
            .map((sound) => (
              <li
                key={sound.id}
                className={`sub-details__list--item btn ${
                  currentTrack && currentTrack.sound === sound.sound ? "active" : ""
                }`}
                onClick={() => handleTrackChange(sound)} // Change la piste au clic
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

export default SubDetailsSounds;
      