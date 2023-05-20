import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ toy }) => {
    const {
        _id,
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
        <div>
            <div className='rounded-xl shadow-lg p-6 bg-blue-100 text-center my-5 flex flex-col justify-center items-center'>
                <div className=' mx-auto'>
                    <img src={photoURL} alt="Toy" className="w-[250px] h-[250px] mb-4 rounded-lg" />
                </div>
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
                    <Link to={`/toy/${toy._id}`}><button className='btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;