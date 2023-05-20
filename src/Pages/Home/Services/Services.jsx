import React from 'react';
import { IconContext } from "react-icons";
import { FaGift, FaHeadSideCough, FaHeadset, FaMoneyBillWave, FaPiggyBank, FaShoppingBag, FaTruck } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Services = () => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl text-center font-bold my-10 mx-auto'>Our Services</h2>
            <div className='flex flex-col lg:flex-row gap-5 mx-10 justify-evenly items-center'>
                <div data-aos="fade-right" className='flex flex-col justify-center items-start'>
                    <div className='flex justify-center items-center gap-5'>
                        <IconContext.Provider value={{ size: "2.5em", className: "global-class-name" }}>
                            <div>
                                <FaTruck />
                            </div>
                        </IconContext.Provider>

                        <div>
                            <h1>Worldwide Delivery</h1>
                            <h1>7 Days Delivery for order over $150</h1>
                        </div>
                    </div>

                    <div data-aos="fade-up"  className='flex justify-center items-center gap-5'>
                        <IconContext.Provider value={{ size: "2.5em", className: "global-class-name" }}>
                            <div>
                                <FaPiggyBank />
                            </div>
                        </IconContext.Provider>

                        <div>
                            <h1>Great Saving</h1>
                            <h1>Learn how to save money while purchasing</h1>
                        </div>
                    </div>

                    <div data-aos="fade-left"  className='flex justify-center items-center gap-5'>
                        <IconContext.Provider value={{ size: "2.5em", className: "global-class-name" }}>
                            <div>
                                <FaGift />
                            </div>
                        </IconContext.Provider>

                        <div>
                            <h1>Gift Vouchers</h1>
                            <h1>Avail Exciting Gift Vouchers</h1>
                        </div>
                    </div>
                </div>
                <div  data-aos="fade-up" >
                    <img className='h-[250px] flex flex-col justify-center items-star mx-auto rounded-lg' src="https://img.freepik.com/free-vector/disguised-hidden-comic-book-superhero-businessman-tearing-his-shirt-concept-vector-illustration_1284-2015.jpg?w=1380&t=st=1684469046~exp=1684469646~hmac=fc83be4e6660931601e93da77ecf9f90c6cb3465abd007f5ea1e4468d4aff789" alt="" />
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <div data-aos="fade-right" className='flex justify-center items-center gap-5'>
                        <IconContext.Provider value={{ size: "2.5em", className: "global-class-name" }}>
                            <div>
                                <FaMoneyBillWave />
                            </div>
                        </IconContext.Provider>

                        <div>
                            <h1>Money Back Gurantee</h1>
                            <h1>Returned within 30 days</h1>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex justify-center items-center gap-5'>
                        <IconContext.Provider value={{ size: "2.5em", className: "global-class-name" }}>
                            <div>
                                <FaHeadset />
                            </div>
                        </IconContext.Provider>

                        <div>
                            <h1>24/7 Support</h1>
                            <h1>Call or email us 24/7 at 000-111-1111</h1>
                        </div>
                    </div>

                    <div data-aos="fade-left" className='flex justify-center items-center gap-5'>
                        <IconContext.Provider value={{ size: "2.5em", className: "global-class-name" }}>
                            <div>
                                <FaShoppingBag />
                            </div>
                        </IconContext.Provider>

                        <div>
                            <h1>Shopping Guide</h1>
                            <h1>Shopping Guide Here</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;