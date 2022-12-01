import React from "react";
import ReactAudioPlayer from "react-audio-player";
//import style from "./Button.module.css";

function Button() {
    return (
        <div>
            <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
        </div>
    );
}

export default Button;
