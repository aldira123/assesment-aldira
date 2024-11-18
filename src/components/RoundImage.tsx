import React from 'react';
import './roundImage.css';
import Link from 'next/link';

interface RoundImageProps {
  imageSrc: string;
  imageName: string;
  albumId: string;
}

const RoundImage: React.FC<RoundImageProps> = ({ imageSrc, imageName, albumId }) => {
  return (
    <Link href={`/album/${albumId}`}>
      <div className='card'>
        <img src={imageSrc} alt={imageName} className='image' />
        <h3 className={'imageName'}>{imageName}</h3>
      </div>
    </Link>
  );
};

export default RoundImage;