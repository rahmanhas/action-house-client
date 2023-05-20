import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useDynamicTitle from '../../CustomHook/UseDynamicTitle';
import Swal from 'sweetalert2';

const AddToy = () => {
    useDynamicTitle("Action House/Add a Toy")
    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState('');
    const handleNewlyAddedToy = event => {
        event.preventDefault()
        const form = event.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;
        const toy = {
            photoURL,
            toyName: name,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            availableQuantity,
            detailDescription
        };
        fetch("https://action-house-server.vercel.app/toys", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Best Wishes!',
                        'Your toy is added to our store!',
                        'success'
                      )
                    form.reset()
                }
            })
            .catch(error => console.log(error));


    }
    return (
        <div className='mx-10'>
            <h1 className='text-center text-2xl font-bold text-black my-5'>Add a Toy</h1>
            <form onSubmit={handleNewlyAddedToy}>
                <div className='grid lg:grid-cols-2 gap-4 p-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 gap-4 p-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="sellerEmail" placeholder="Seller Email" className="input input-bordered" />
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 gap-4 p-5'>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs" name='subCategory' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                            <option>DC Comics</option>
                            <option>Marvel Comics</option>
                            <option>Transformers</option>
                            <option>Star Wars</option>
                            <option>Star Trek</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered" />
                    </div>

                </div>
                <div className='grid lg:grid-cols-2 gap-4 p-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="Rating (1-5)" min={1} max={5} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" min={1} name="availableQuantity" placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                </div>
                <div className='p-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <input type="text" name="detailDescription" placeholder="Detail Description" className="input input-bordered input-lg " />
                    </div>

                </div>
                <div className='p-5'>
                    <input className='btn btn-primary btn-block bg-blue-500 hover:bg-blue-800 border-0 text-black' type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;
