import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './player.css';
import {useTranslation} from "react-i18next";

const Player = ({video}) => {
    const {i18n} = useTranslation();
    return (
        <div className="player-wrapper">
            <ReactPlayer
                url={video.video}
                className="react-player"
                width={"100%"}
                controls={true}
            />
            {i18n.language === 'ky' &&(
                <h4 className="player-title">{video.title_ky}</h4>
            ) }
            {i18n.language === 'ru' &&(
                <h4 className="player-title">{video.title_ru}</h4>
            ) }
            {i18n.language === 'en' &&(
                <h4 className="player-title">{video.title_en}</h4>
            ) }
        </div>
    );
};

export default Player;