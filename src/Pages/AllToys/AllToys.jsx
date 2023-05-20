import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../CustomHook/UseDynamicTitle';

const AllToys = () => {
    useDynamicTitle("Action House | All Toys")
    const [toys, setToys] = useState([]);
    const [searchName, setSearchName] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/storedtoydata")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/searchbytoyname/${searchName}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [searchName])

    return (
        <div className='m-10'>
            <h1 className="text-center text-2xl font-bold text-black my-5">All Toys</h1>
            <div className="form-control w-full max-w-sm mx-auto flex flex-row my-5 justify-center items-center">
                <div>
                    <input onChange={(e) => setSearchName(e.target.value)} type="text" placeholder="Search by Toy Name" className="input input-bordered w-full max-w-xs" />
                </div>
                
            </div>
            <table className='w-full bg-white border border-gray-300 text-center overflow-x-scroll'>
                <thead>
                    <tr className=''>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Seller Name</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Toy Name</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Sub Category</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Price</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">Available Quantity</th>
                        <th className="py-2 px-4 bg-blue-300 border border-gray-500">View Details</th>

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
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 ">
                                <Link to={`/toy/${toy._id}`}>
                                    <button className='btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black'>View Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;