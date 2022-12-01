import React from "react";
import ReactAudioPlayer from "react-audio-player";
//import style from "./Button.module.css";

function Button() {
    return (
        <div>
            <ReactAudioPlayer
                src="../../assets/mod-pm1.mp3"
                autoPlay
                controls
            />
        </div>
    );
}

export default Button;
