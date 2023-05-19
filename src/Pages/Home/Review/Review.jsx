import React from 'react';
import customer1 from "../../../assets/customer/customer-1.webp"
import customer2 from "../../../assets/customer/customer-2.webp"
import customer3 from "../../../assets/customer/customer-3.webp"
import customer4 from "../../../assets/customer/customer-4.webp"

const Review = () => {
    return (
        <div className='m-10'>
            <h2 className='text-4xl text-center font-bold mx-auto'>Our Clients Say</h2>
            <div className="carousel w-full mx-auto">
                <div id="slide1" className="carousel-item flex flex-col relative w-full justify-center items-center gap-5">
                    <img src={customer1} className="w-1/4 rounded-full mx-auto" />
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold py-5'>Shahrukh Khan</h1>
                        <p className='w-full '>After purchasing an action figure from Action-House, I am thoroughly impressed. The figure arrived in perfect condition, showcasing excellent attention to detail. The articulation allows for dynamic poses, and the accessories are top-notch. Action-House's service was prompt, and their packaging ensured a secure delivery. Highly recommended for action figure enthusiasts!</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-10">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item flex flex-col relative w-full justify-center items-center gap-5">
                    <img src={customer2} className="w-1/4 rounded-full mx-auto" />
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold py-5'>Soha Ali Khan</h1>
                        <p className='w-full '>Action-House exceeded my expectations with their incredible action figure. The attention to detail is outstanding, and the figure's poseability is impressive. The packaging was secure, and their customer service was responsive and helpful. I highly recommend Action-House for top-quality collectibles.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-10">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item flex flex-col relative w-full justify-center items-center gap-5">
                    <img src={customer3} className="w-1/4 rounded-full mx-auto" />
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold py-5'>Saif Ali Khan</h1>
                        <p className='w-full '>Action-House truly delivered a masterpiece with their action figure. The level of craftsmanship is unparalleled, from the intricately sculpted features to the flawless paintwork. The figure's articulation is smooth, allowing for dynamic poses. With excellent packaging and efficient service, Action-House has earned my highest recommendation.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-10">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item flex flex-col relative w-full justify-center items-center gap-5">
                    <img src={customer4} className="w-1/4 rounded-full mx-auto" />
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold py-5'>Ranveer Sing</h1>
                        <p className='w-full '>Action-House truly delivered a masterpiece with their action figure. The level of craftsmanship is unparalleled, from the intricately sculpted features to the flawless paintwork. The figure's articulation is smooth, allowing for dynamic poses. With excellent packaging and efficient service, Action-House has earned my highest recommendation.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-10">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default Review;