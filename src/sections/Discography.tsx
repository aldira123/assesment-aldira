'use client'

import React, { useEffect, useState } from 'react';
import ImageCard from '@/components/RoundImage';
import { getAlbum } from "@/data/data";
import './discography.css';

interface AlbumItem {
  id: string;
  album: string;
  artist: string;
  year: string;
  label: string;
  link: string;
}

export default function Discography() {
  const [img, setImages] = useState<AlbumItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const albumData = await getAlbum();
      setImages(albumData);
    }
    fetchData();
  }, []);

  return (
    <div className='container-album'>
      <div className='header-album'>
        <h1 id='discography'>Discography</h1>
      </div>
      <div className='albumGrid'>
        {img.map((album) => (
          <ImageCard 
            key={album.id} 
            imageSrc={album.link}
            imageName={album.album} 
            albumId={album.id}
          />
        ))}
      </div>
    </div>
  );
}