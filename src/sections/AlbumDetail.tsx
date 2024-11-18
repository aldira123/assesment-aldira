'use client'

import React, { useEffect, useState } from 'react'
import { getSpecificAlbum, getTrack } from "@/data/data";
import { useParams } from 'next/navigation'
import AlbumDetailComponent from '@/components/AlbumDetailComponent';
import ListTrackCard from '@/components/ListTrackCard';

interface AlbumItem {
    id: string;
    album: string;
    artist: string;
    year: string;
    label: string;
    link: string;
    description: string;
    genre: string;
}

interface TrackItem{
    idTrack: string;
    idAlbum: string;
    track: string;
    duration: string;
}

export default function AlbumDetail() {
    const { id } = useParams();
    const [album, setAlbum] = useState<AlbumItem[]>([]);
    const [track, setTrack] = useState<TrackItem[]>([]);

    useEffect(() => {
        async function fetchData() {
            if (typeof id === 'string') { 
                const albumData = await getSpecificAlbum(id);
                console.log(albumData);
                setAlbum(albumData);
            } else {
                console.error('ID is not a valid string:', id);
            }
        }
        fetchData();
      }, []);

    useEffect(() => {
        async function fetchData() {
            if (typeof id === 'string') { 
                const trackData = await getTrack(id);
                setTrack(trackData);
            } else {
                console.error('ID is not a valid string:', id);
            }
        }
        fetchData();
      }, []);

    const dataAlbum = album;
    const dataTrack = track;
    const numberOfTrack = track.length;

  return (
    <div>
        {dataAlbum && dataTrack ? (
            <div>
                {dataAlbum.map((albumItem) => (
                    <AlbumDetailComponent key={albumItem.id} detail={
                       {
                        imageSrc: albumItem.link,
                        imageName: albumItem.album, 
                        description: albumItem.description? albumItem.description : 'There is no description for this album',
                        albumName: albumItem.album,
                        track: numberOfTrack,
                        year: albumItem.year? albumItem.year : 'There is no year data for this album',
                        label: albumItem.label? albumItem.label : 'There is no label data for this album',
                        genre: albumItem.genre? albumItem.genre : 'R&B'
                        }} />
                ))}
                <ListTrackCard 
                        tracks={dataTrack.map((trackItem) => ({
                            track: trackItem.track,
                            duration: convertMillisecondsToMinutes(trackItem.duration),
                        }))}
                    />
            </div>
        ) : (
            <p>No album found.</p>
        )}
    </div>
  )
}

function convertMillisecondsToMinutes(milliseconds: string) {
    const ms = parseInt(milliseconds, 10);
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}