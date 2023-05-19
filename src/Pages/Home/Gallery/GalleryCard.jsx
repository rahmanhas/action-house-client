import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const GalleryCard = ({ image }) => {
console.log(image.image);
    return (
        <div className=" rounded-lg  p-6  text-center">
            <img src={image.image} alt="Toy" className="w-[250px] h-[250px] mb-4 rounded-lg mx-auto" />
            {/* <div>
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
            </div> */}
        </div>
    );
};

export default GalleryCard;