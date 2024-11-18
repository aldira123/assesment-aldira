'use client'

import React, { useState, useEffect } from 'react';
import { getSpecificAlbum, getDataArtist } from "@/data/data";
import './hero.css'
import CardComponent from '@/components/CardComponent';

interface AlbumItem {
  id: string;
  album: string;
  artist: string;
  year:  string;
  label: string;
  link: string;
  description: string;
}

interface ArstistItem{
  bornYear: string,
  style: string,
  genre: string,
  biography: string,
  image: string
}

export default function Hero() {
  const [album, setAlbum] = useState<AlbumItem[]>([]);
  const [artist, setArtist] = useState<ArstistItem>();
  const albumId = "2436714";

  useEffect(() => {
    async function fetchData() {
      const albumData = await getSpecificAlbum(albumId);
      setAlbum(albumData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const artistData = await getDataArtist();
      setArtist(artistData);
    }
    fetchData();
  }, []);

  const lastAlbum = album[album.length - 1];
  const lastArtist = artist;
 
  
  return (
    <div>
        {lastAlbum && lastArtist ? (
          <CardComponent img={
            { 
              link: lastAlbum.link,
              artist: lastAlbum.artist, 
              album: lastAlbum.album, 
              description: lastAlbum.description, 
              year: lastAlbum.year, 
              bornYear: lastArtist.bornYear, 
              style: lastArtist.style, 
              genre: lastArtist.genre, 
              biography: lastArtist.biography,
              image: lastArtist.image,
              albumId: albumId
            }} />
        ) : (
          <p>No album found.</p>
        )}
    </div>
  );
}
