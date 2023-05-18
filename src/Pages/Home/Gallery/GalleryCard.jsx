import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const GalleryCard = ({ toy }) => {
    const {
        photoURL,
        toyName,
        sellerName,
        sellerEmail,
        subCategory,
        price,
        rating,
        availableQuantity,
        detailDescription
    } = toy;
    return (
        <div className=" rounded-lg shadow-lg p-6 bg-blue-100 text-center">
            <img src={photoURL} alt="Toy" className="w-full mb-4 rounded-lg" />
            <div>
                <div className='flex justify-center items-center'>
                <Rating
                    className=''
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />
                </div>
                <h2 className="text-xl font-bold my-4">{toyName}</h2>
                <p className='mb-4 text-red-500 text-xl'>${price}</p>
                <button className='btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black'>View Details</button>
            </div>
        </div>
    );
};

export default GalleryCard;