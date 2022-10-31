import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = () => {

    let title;

    const onPlayerReady= (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log(event.target)
        title = event.target.unloadModule().videoTitle;
        console.log('title', title)
        console.log(event.target.getVideoData())
    }

    const opts = {
        height: '390',
        width: '640',
        // playerVars: {
        //     // https://developers.google.com/youtube/player_parameters
        //     autoplay: 0,
        // },
    };

    return (
        <div>
            <YouTube videoId="m6OksoJs2NE&list" opts={opts} onReady={onPlayerReady} />
        </div>
    );
};

export default YoutubePlayer;