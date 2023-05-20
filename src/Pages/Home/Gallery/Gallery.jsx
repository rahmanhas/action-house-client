import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCArd';

const Gallery = () => {
    const [images,setImages] = useState([]);
    useEffect(()=>{
        fetch("https://action-house-server.vercel.app/galleryimages")
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])
    
    
    return (
        <div data-aos="zoom-in">
            <h1 className='text-4xl text-center font-bold my-10 mx-auto '>Gallery of Exclusive Action Figures</h1>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 justify-center items-center mx-auto'>
            {
                images.map(image=> <GalleryCard
                key={image._id}
                image={image}
                ></GalleryCard>)
            }
            </div>
        </div>
    );
};

export default Gallery;