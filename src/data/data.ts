export async function dataAPI() {
    const api = await fetch('https://www.theaudiodb.com/api/v1/json/2/artist.php?i=112024')
    const data = await api.json();    

    return data;
}

export async function dataAlbum() {
    const api = await fetch('https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024')
    const data = await api.json();    

    return data;
}

export async function dataSpecificAlbum(albumId:string) {
    const api = await fetch(`https://www.theaudiodb.com/api/v1/json/2/album.php?m=${albumId}`)
    const data = await api.json();    

    return data;
}

export async function dataTrack(albumId:string) {
    const api = await fetch(`https://www.theaudiodb.com/api/v1/json/2/track.php?m=${albumId}`)
    const data = await api.json();    

    return data;
}

export const navs = [
    {
        id: 1,
        name: 'Home',
        link: '/',
        active: true,
    },
    {
        id: 2,
        name: 'About',
        link: '/#artists-desc',
        active: false,
    },
    {
        id: 3,
        name: 'Discography',
        link: '/discography',
        active: false
    }
    
]

export async function getScis() {
    try {
        const data1 = await dataAPI();

        if (data1 && data1.artists && data1.artists[0]) {
            const artistData = data1.artists[0];
            
            return [
                {
                    id: 1,
                    icon: 'bi-facebook',
                    link: artistData.strFacebook || '#',  
                },
                {
                    id: 2,
                    icon: 'bi-twitter-x',
                    link: 'x.com/theweeknd?',   
                },
                {
                    id: 3,
                    icon: 'bi-instagram',
                    link: 'www.instagram.com/theweeknd/?hl=en'
                },
                {
                    id: 4,
                    icon: 'bi-youtube',
                    link: 'www.youtube.com/channel/UC0WP5P-ufpRfjbNrmOWwLBQ'
                },
                {
                    id: 5,
                    icon: 'bi-globe',
                    link: artistData.strWebsite || '#', 
                },
            ];
        }
    } catch (error) {
        console.error("Error fetching artist data:", error);
    }

    return [];
}

export async function getDataArtist() {
    try {
        const data1 = await dataAPI();

        if (data1 && data1.artists && data1.artists.length > 0) {
            const artistData = data1.artists[0];
        
            return {
                id: artistData.idArtist,
                bornYear: artistData.intBornYear,
                style: artistData.strStyle,
                genre: artistData.strGenre,
                biography: artistData.strBiographyEN,
                image: artistData.strArtistClearart
            }
        } 
    } catch (error) {
        console.error("Error fetching album data:", error);
    }

    return [];
}

export async function getImage() {
    try {
        const data1 = await dataAPI();

        if (data1 && data1.artists && data1.artists[0]) {
            const artistData = data1.artists[0];
            
            return [
                {
                    id: 1,
                    name: 'Artist Thumb',
                    link: artistData.strArtistThumb || '#',  
                },
                {
                    id: 2,
                    name: 'Artist Logo',
                    link: artistData.strArtistLogo || '#',   
                },
                {
                    id: 3,
                    name: 'Artist Cutout',
                    link: artistData.strArtistCutout || '#',
                },
                {
                    id: 4,
                    name: 'Artist Clearart',
                    link: artistData.strArtistClearart || '#',
                },
            ];
        }
    } catch (error) {
        console.error("Error fetching artist data:", error);
    }

    return [];
}

export async function getAlbum() {
    try {
        const data = await dataAlbum();

        if (data && data.album) {
            return data.album.map((item: { idAlbum: string; strAlbum: string; strArtist: string; intYearReleased: string, strLabel: string, strAlbumThumb: string })  => ({
                id: item.idAlbum,
                album: item.strAlbum,
                artist: item.strArtist,
                year: item.intYearReleased,
                label: item.strLabel,
                link: item.strAlbumThumb
            }));
        }
    } catch (error) {
        console.error("Error fetching album data:", error);
    }
    
    return [];
}

export async function getSpecificAlbum( albumId:string ) {
    try {
        const data = await dataSpecificAlbum(albumId);

        if (data && data.album) {
            return data.album.map((item: { idAlbum: string; strAlbum: string; strArtist: string; intYearReleased: string; strLabel: string; strAlbumThumb: string; strDescriptionEN: string }) => ({
                id: item.idAlbum,
                album: item.strAlbum,
                artist: item.strArtist,
                year: item.intYearReleased,
                label: item.strLabel,
                link: item.strAlbumThumb,
                description: item.strDescriptionEN,
            }));
        }
    } catch (error) {
        console.error("Error fetching album data:", error);
    }

    return [];
}

export async function getTrack( albumId:string ) {
    try {
        const data = await dataTrack(albumId);

        if (data && data.track) {
            return data.track.map((item: { idTrack: string; idAlbum: string; strAlbum: string; strArtist: string; strTrack: string, intDuration: string, strGenre: string })  => ({
                idTrack: item.idTrack,
                idAlbum: item.idAlbum,
                album: item.strAlbum,
                artist: item.strArtist,
                track: item.strTrack,
                duration: item.intDuration,
                genre: item.strGenre
            }));
        }
    } catch (error) {
        console.error("Error fetching album data:", error);
    }
    
    return [];
}