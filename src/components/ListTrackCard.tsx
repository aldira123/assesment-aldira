import React from 'react';
import './listTrackCard.css';

type Track = {
  track: string;
  duration: string;
};

type ListTrackCardProps = {
  tracks: Track[];
};

export default function ListTrackCard({ tracks }: ListTrackCardProps) {
  const handleShare = (track: string, duration: string) => {
    if (navigator.share) {
      navigator.share({
        title: track, 
        text: `Check out this track: ${track} - Duration: ${duration}`, 
        url: window.location.href, 
      })
      .then(() => console.log('Track shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <div className="listTrackCard-container">
      <h1 id='track-list'>List Track</h1>
      {tracks.map((track, index) => (
        <div className="listTrackCard" key={index}>
          <button className="play-button">
            ▶ 
          </button>
          <div className="track-info">
            <h4>{track.track}</h4>
            <p>Duration: {track.duration}</p>
          </div>
          <button className="share-button" onClick={() => handleShare(track.track, track.duration)}>
           ➦
          </button>
        </div>
      ))}
    </div>
  );
}

