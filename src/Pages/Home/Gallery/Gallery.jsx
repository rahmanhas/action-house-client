import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCArd';

const Gallery = () => {
    const [toys,setToys] = useState([]);
    useEffect(()=>{
        fetch("https://action-house-server.vercel.app/storedtoydata")
        .then(res=>res.json())
        .then(data=>setToys(data.slice(0,4)))
    },[])
    
    
    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-10 mx-auto '>Gallery of Exclusive Action Figures</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center'>
            {
                toys.map(toy=><GalleryCard
                key={toy._id}
                toy={toy}
                ></GalleryCard>)
            }
            </div>
        </div>
    );
};

export default Gallery;