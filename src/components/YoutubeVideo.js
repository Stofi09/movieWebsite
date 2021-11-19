import React from 'react';
import YouTube from 'react-youtube';


const YoutubeVideo = () => {

    const opts = {
        height: '98',
        width: '160',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
     const  onReady = (event) =>{
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      };
      return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />;

}

export default YoutubeVideo;