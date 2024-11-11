export async function dataAPI() {
    const api = await fetch('https://www.theaudiodb.com/api/v1/json/2/artist.php?i=112024')
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
        link: '/about',
        active: false,
    },
    {
        id: 3,
        name: 'Contact',
        link: '/contact',
        active: false
    }
    
]

export async function getScis() {
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
                link: artistData.strTwitter || '#',   
            },
            {
                id: 3,
                icon: 'bi-instagram',
                link: artistData.strInstagram || '#', 
            },
            {
                id: 4,
                icon: 'bi-globe',
                link: artistData.strWebsite || '#', 
            },
        ];
    }

    return [];
}