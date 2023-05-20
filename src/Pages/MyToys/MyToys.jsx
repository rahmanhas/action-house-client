import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useDynamicTitle from '../../CustomHook/UseDynamicTitle';

const MyToys = () => {
    useDynamicTitle("Action House | My Toys")
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [toys, setToys] = useState([]);
    const [sort, setSort] = useState(true);

    useEffect(() => {
       if(sort){
        fetch(`http://localhost:5000/ascendedtoy/${email}`)
        .then(res => res.json())
        .then(data => setToys(data))
       }
       else{
        fetch(`http://localhost:5000/descendedtoy/${email}`)
        .then(res => res.json())
        .then(data => setToys(data))
       }
    }, [sort,email])
    
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://action-house-server.vercel.app/deletetoy/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            
                            const remaining = toys.filter(user => user._id !== _id)
                            setToys(remaining);
                        }
                    })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }

    return (
        <div className='m-10'>
            <h1 className='text-center text-2xl font-bold text-black my-5'>My Toys</h1>
            <div className='flex justify-center items-center gap-10 my-5'>
                <button onClick={()=>setSort(true)} className='btn btn-info'>Ascending</button>
                <button onClick={()=>setSort(false)} className='btn btn-info'>Descending</button>
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
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 ">
                                <Link to={`/toy/${toy._id}`}><button className='btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black'>View Details</button></Link>
                            </td>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 ">
                                <Link to={`/updatetoy/${toy._id}`}><button className='btn btn-outline btn-info border-0 text-black'>Update</button></Link>
                            </td>
                            <td className="py-2 px-4 bg-blue-100 border border-gray-500 "><button className='btn btn-outline btn-warning border-0' onClick={() => handleDelete(toy._id)} >Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;