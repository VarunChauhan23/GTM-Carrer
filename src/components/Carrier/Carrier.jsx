import './Carrier.module.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import { useEffect, useState } from 'react';

const Carrier = () => {
    const images = [img1, img2];
    const [currImg, setCurrImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrImg((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="carrier-heading">
                <h2 className="heading-text">Carrier</h2>
            </div>
            <div className="carrer-container">
                <div className="carrer-content">
                    <h2>Carrier at Good Tech Mind</h2>
                    <p>We invite you to supercharge your potential. Find what inspires and drives you. Find your spark.</p>
                    <button>Visit Our Carrier Page &rarr;</button>
                </div>
                <div className="carrer-img-div">
                    <img
                        src={images[currImg]}
                        alt={`Image ${currImg}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Carrier;
