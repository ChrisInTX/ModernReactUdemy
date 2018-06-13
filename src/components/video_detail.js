// This class manages the YouTube embeded video player functionality and UI
// (c) Chris Lowe May 2018

import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return <div>Video player loading...</div>
  }

  const videoID = video.id.videoId;
  // note: using a backtick you can use ES6 syntax to embed the variable in URL
  const videoURL = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-response embed-response-16by9">
        <iframe className="embed-responsive-item" src={videoURL}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
