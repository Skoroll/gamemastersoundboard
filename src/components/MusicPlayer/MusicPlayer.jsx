import React from "react";

function MusicPlayer(placeMusic) {
    if (!placeMusic) {
        return null;
    }

    return (
        <div className="music-player">
            <audio controls src={placeMusic} />
        </div>

    )
}

export default MusicPlayer