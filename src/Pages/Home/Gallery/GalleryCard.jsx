import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const GalleryCard = ({ image }) => {

    return (
        <div className=" rounded-lg  p-6  text-center">
            <img src={image.image} alt="Toy" className="w-[250px] h-[250px] mb-4 rounded-lg mx-auto" />

        </div>
    );
};

export default GalleryCard;