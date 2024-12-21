import React, { useState, useRef, useEffect } from "react";
import "./CustomAudioPlayer.scss";

function CustomAudioPlayer({ audioSource }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLooping, setIsLooping] = useState(false); // État pour gérer le mode loop
  const audioRef = useRef(null);

  // Fonction pour basculer entre play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Fonction pour changer la position de la lecture
  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Fonction pour gérer le volume
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const muteOnClick = () => {
    audioRef.current.volume = 0; // Mettez le volume de l'élément audio à zéro
    setVolume(0); // Mettez à jour l'état React du volume
  };

  // Fonction pour basculer le mode loop
  const toggleLoop = () => {
    const newLoopState = !isLooping;
    audioRef.current.loop = newLoopState; // Active/désactive le mode loop sur l'élément audio
    setIsLooping(newLoopState);
  };
// Vérifier si la source est bien définie
useEffect(() => {
  console.log("Audio source:", audioSource);
}, [audioSource]);

  // Gestion des événements de l'élément audio
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateMetadata = () => setDuration(audio.duration);
    const handleAudioEnd = () => {
      setIsPlaying(false); // Réinitialise l'état de lecture
      setCurrentTime(0); // Réinitialise le temps de lecture à zéro
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateMetadata);
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateMetadata);
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  // Calcul de la progression
  const progress = (currentTime / duration) * 100 || 0;

  return (
    <div className="custom-audio-player">
      <audio ref={audioRef} src={audioSource} />
      <div className="progress-bar">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
        <div className="time">
          <span>{Math.floor(currentTime)}s</span> / <span>{Math.floor(duration)}s</span>
        </div>
      </div>
      <div className="controls">
        {/* Contrôle du volume */}
        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
          <i onClick={muteOnClick} className="fa-solid fa-volume-high"></i>
        </div>
        <div className="controls__buttons">
          {/* Bouton Loop */}
          <button onClick={toggleLoop} aria-label="loop button" className={`loop-button btn ${isLooping ? "active" : ""}`}>
            {isLooping ? <i className="fa-solid fa-repeat"></i> : <i className="fa-solid fa-repeat"></i>}
          </button>

          {/* Bouton play/pause */}
          <button aria-label="play pause button" className="controls__play-pause btn" onClick={togglePlay}>
            {isPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomAudioPlayer;
