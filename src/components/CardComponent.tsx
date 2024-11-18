// components/CardComponent.tsx
import Image from 'next/image';
import './cardComponent.css';
import Link from 'next/link';

interface ImageData {
    link: string;
    artist: string;
    album: string;
    description: string;
    year: string;
    bornYear: string,
    style: string,
    genre: string,
    biography: string,
    image: string,
    albumId: string,
}

interface CardComponentProps {
    img: ImageData; 
}

const CardComponent: React.FC<CardComponentProps> = ({ img }) => {
    return (
        <div className='cardContainer' id='artists-desc'>
            <div className='squareCard'>
                <h2>NEW ALBUM!</h2>
                 <Image 
                    className='card-img'
                    src={img.link} 
                    alt={img.artist} 
                    width={150} 
                    height={150} 
                />
                <h2>{img.album}</h2>
                <Link href={`/album/${img.albumId}`}>
                    <button className="listen-button">
                        Listen now!
                    </button>
                </Link>
            </div>
            <div className='rectangleCard'>
                <Image 
                    className='card-img-bio'
                    src={img.image} 
                    alt={img.artist} 
                    width={150} 
                    height={150} 
                    quality={100}
                    priority={false}
                />
                <div className='font-card'>
                    <h2>{img.artist}</h2>
                    <h3>{img.style} | {img.genre} </h3>
                    <p className='overlay'>{img.biography}</p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;