'use client'

import React, { useEffect, useState } from 'react';
import ImageCard from '@/components/RoundImage';
import { getAlbum } from "@/data/data";
import Link from 'next/link';
import './album.css';

interface AlbumItem {
  id: string;
  album: string;
  artist: string;
  year: string;
  label: string;
  link: string;
}

export default function Album() {
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
        <Link href="/discography">
          <button className='button'>
            See All 
          </button>
        </Link>
      </div>
      <div className='albumGrid'>
        {img.slice(0, 10).map((album) => (
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