import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateToys = () => {
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();
    const {_id,toyName,price,availableQuantity, detailDescription } = toy;
    const handleUpdateToy = event=>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;
        const updateToy = {price,availableQuantity,detailDescription}

        fetch(`https://action-house-server.vercel.app/updatetoy/${_id}`,{
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateToy)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your toy data is updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
                form.reset()
            }
        })
        .catch(error=>console.log(error.message))

    }

    

    
    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-black my-5'>Update Toy: {toyName}</h1>
            <form onSubmit={handleUpdateToy}>

                <div className='grid lg:grid-cols-2 gap-4 p-5'>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" min={1} name="availableQuantity" placeholder="Available Quantity" className="input input-bordered" defaultValue={availableQuantity} />
                    </div>

                </div>

                <div className='p-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <input type="text" defaultValue={detailDescription} name="detailDescription" placeholder="Detail Description" className="input input-bordered input-lg " />
                    </div>

                </div>
                <div className='p-5'>
                    <input className='btn btn-primary btn-block bg-blue-500 hover:bg-blue-800 border-0 text-black' type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;