import React from 'react';
import './albumDetailComponent.css';
import Image from 'next/image';

interface AlbumDetail {
  imageSrc: string;
  imageName: string;
  description: string;
  albumName:string;
  year: string;
  track: number;
  genre: string;
  label: string;
}

interface AlbumDetailComponentProps {
    detail: AlbumDetail; 
}

const AlbumDetailComponent: React.FC<AlbumDetailComponentProps> = ({ detail }) => {
  return (

        <div className='cardContainer-album' id='artists-desc'>
            <div className='squareCard-album'>
                <h2>{detail.albumName}</h2>
                 <Image 
                    className='card-img'
                    src={detail.imageSrc} 
                    alt={detail.imageName} 
                    width={150} 
                    height={150} 
                />
            </div>
            <div className='rectangleCard-album'>
                <div className='font-card-album'>
                    <div className='detail-grid'>
                        <h4>Realease Year: <br /><span>{detail.year}</span></h4>
                        <h4>Genre: <br /><span>{detail.genre}</span> </h4>
                        <h4>Label: <br /><span>{detail.label}</span></h4>
                        <h4>Number of tracks: <br /><span>{detail.track}</span> </h4>
                    </div>
                    <h4>Description:</h4>
                    <span>{detail.description}</span>
                </div>
            </div>
        </div>
  );
};

export default AlbumDetailComponent;