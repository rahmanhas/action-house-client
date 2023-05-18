import React from 'react';
import banner from "../../../assets/Banner.jpeg"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold">Hello Heroes!!!</h1>
                    <p className="mb-5 text-xl">The ultimate destination for action figure enthusiasts. Find your perfect collectible, unleash the hero within!</p>
                    <Link to='/login'><button className="btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;