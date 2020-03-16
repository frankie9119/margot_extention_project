import React from 'react';
import './YouTubeComponent.css';
import YouTube from 'react-youtube';

class YouTubeComponent extends React.Component {
render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://www.youtube.com/watch?v=5k95x0pAEhE
        autoplay: 1
      }
    };

    return (
      <div className="YouTubeComponent">
      <YouTube className="video"
        videoId="5k95x0pAEhE"
        
        onReady={this._onReady}
      />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubeComponent