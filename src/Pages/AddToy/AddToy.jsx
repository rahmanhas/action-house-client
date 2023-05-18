import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddToy = () => {
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
        fetch("http://localhost:5000/toys", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if(data.inserted){
                //     alert("service booked successfully")
                //     form.reset()
                // }
            })

    }
    return (
        <div>
            <h2>Add a Toy</h2>
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
                        <select className="select select-bordered w-full max-w-xs" name='subCategory' value={selectedOption}>
                            <option disabled selected>What is the subcategory?</option>
                            <option>DC Comics Toy</option>
                            <option>Marvel Comics Toy</option>
                            <option>Marvel Comics Toy</option>
                            <option>Star Wars Toy</option>
                            <option>Star Treck Toy</option>
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

// Picture URL of the toy,
//     Name,
//     seller name(if available from the logged in user)
// seller email(info from the logged in user)
// Sub - category(For example: if the website is based on Educational and learning toys, the sub - categories can be Math Toys, Language Toys, and Science Toys.)
// Price,
//     Rating,
//     Available quantity
// Detail description