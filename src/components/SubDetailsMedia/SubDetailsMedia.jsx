import React, { useState } from "react";
import CustomAudioPlayer from "../CustomAudioPlayer/CustomAudioPlayer";

function SubDetailsMedia({ media = [], type }) {
  const [currentTrack, setCurrentTrack] = useState(
    media.length > 0
      ? { name: media[0]?.name || `Aucun ${type} disponible`, source: media[0]?.audio || "", id: media[0]?.id || "" }
      : null
  );

  // Fonction pour changer de piste
  const handleTrackChange = (track) => {
    console.log("Changement de musique:", track);
    setCurrentTrack(track);
  };
  
  // Vérifier la source de la musique avant de l'envoyer au lecteur
  const trackSource = currentTrack && currentTrack.source;
  console.log("Source de la musique actuelle:", trackSource);
  
  if (!media || media.length === 0) {
    return <p>Aucun {type} disponible.</p>;
  }

  return (
    <div className={`sub-details-${type}`}>
      {/* Lecteur audio pour la piste sélectionnée */}
      <div className={`sub-details-${type}__player`}>
        {currentTrack && currentTrack.source ? (
          <CustomAudioPlayer audioSource={currentTrack.source} />
        ) : (
          <p>Aucun {type} disponible.</p>
        )}
      </div>

      {/* Liste des médias */}
      <div className="sub-details__list">
        <ul>
          {media
            .filter((item) => item.name && item.audio) // Filtrer les médias valides
            .map((item) => (
              <li
                key={item.id} // Utiliser l'ID pour la clé
                className={`sub-details__list--item btn ${
                  currentTrack && currentTrack.id === item.id ? "active" : ""
                }`}
                onClick={() => handleTrackChange({ name: item.name, source: item.audio, id: item.id })}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}


export default SubDetailsMedia;
