// This class manages the list of VideoList items and UI
// (c) Chris Lowe May 2018

import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  console.log(video);
  const videoImageURL = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={videoImageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </div>
    </li>
  );
};


export default VideoListItem;
