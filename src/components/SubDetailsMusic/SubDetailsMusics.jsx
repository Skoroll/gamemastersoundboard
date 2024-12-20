import React, { useState } from "react";
import CustomAudioPlayer from "../CustomAudioPlayer/CustomAudioPlayer";

function SubDetailsMusics({ musics = [] }) {
  // Initialisation de la piste en cours
  const [currentTrack, setCurrentTrack] = useState(
    musics.length > 0
      ? { name: musics[0]?.name || "Aucune musique disponible", audio: musics[0]?.audio || "" }
      : null
  );

  // Gestion du clic pour changer de piste
  const handleTrackChange = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="sub-details-musics">
      {/* Lecteur audio pour la piste sélectionnée */}
      <div className="sub-details-musics__player">
        {currentTrack && currentTrack.audio ? (
          <CustomAudioPlayer audioSource={currentTrack.audio} />
        ) : (
          <p>Aucune musique disponible.</p>
        )}
      </div>

      {/* Liste des musiques */}
      <div className="sub-details__list">
        <ul>
          {musics
            .filter((music) => music.name && music.audio) // Filtrer les musiques valides
            .map((music, index) => (
              <li
                key={index}
                className={`sub-details__list--item btn ${
                  currentTrack && currentTrack.audio === music.audio ? "active" : ""
                }`}
                onClick={() => handleTrackChange(music)} // Change la piste au clic
              >
                {music.icon || "🎵"} {music.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SubDetailsMusics;
