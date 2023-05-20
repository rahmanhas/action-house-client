import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useDynamicTitle from '../../CustomHook/UseDynamicTitle';

const SingleToyDetails = () => {
    const toy = useLoaderData();
    
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
    } = toy
    useDynamicTitle(`Action House | Toy Information ${toyName}`)
    return (
        <div className='m-10'>
            <h1 className='text-center text-2xl font-bold text-black my-5'>single toy details</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center bg-blue-50 p-5 mx-auto w-full">
                <div className='lg:w-1/3 flex justify-center items-center'>
                    <img src={photoURL} alt={name} className="w-64 h-64 shadow-lg object-contain rounded-lg mb-4" />
                </div>
                <div className='lg:w-1/3 text-center lg:text-left'>
                    <h1 className="text-3xl font-bold mb-2">{name}</h1>
                        <p className="mb-4 text-2xl font-bold">{subCategory} Action Figure</p>
                    <p className="text-gray-600 mb-4 flex justify-center lg:justify-start">
                    <Rating
                            className=''
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        />
                    </p>
                    <p className="text-red-500 text-xl mb-4">${price}</p>
                    <p className=" mb-4">Only <span className='font-bold text-red-700'>{availableQuantity}</span> pcs Available!!!!!! <br />Hurry Up</p>
                    
                </div>
                <div className='lg:w-1/3 text-center lg:text-left'>
                <p className=" mb-4"><span className='font-bold'>Seller:</span> {sellerName}</p>
                    <p className="mb-4"><span className='font-bold'>Seller Email</span>: {sellerEmail}</p>
                    <p className="mb-4"><span className='font-bold'>Product Description:</span><br />{detailDescription}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleToyDetails;