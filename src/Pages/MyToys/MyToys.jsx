import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [toys, setToys] = useState([]);
    
    useEffect(() => {
        fetch(`https://action-house-server.vercel.app/mytoys/${email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [email])
    return (
        <div className='mx-10'>
            <h1 className='text-center text-2xl font-bold text-black my-5'>My Toys</h1>
            

            <table className='w-full bg-white border border-gray-300 text-center'>
                <thead>
                    <tr className=''>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Seller Name</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Toy Name</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Sub Category</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Price</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Available Quantity</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">View Details</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Update</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {toys.map(toy => (
                        <tr
                            key={toy._id}>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 ">{toy.sellerName}</td>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 ">{toy.toyName}</td>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 ">{toy.subCategory}</td>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 ">{toy.price}</td>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 ">{toy.availableQuantity}</td>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 "><button className='btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black'>View Details</button></td>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 "><button className='btn btn-outline btn-info border-0 text-black'>Update</button></td>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 "><button className='btn btn-outline btn-warning border-0 '>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;