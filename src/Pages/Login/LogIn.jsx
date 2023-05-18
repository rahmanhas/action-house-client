import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content lg:w-1/2 text-center">

                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-center">Login now!</h1>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <p className='my-5'>New to action house? Please <Link to='/register' className='text-red-500'>register</Link></p>
                            </label>
                        </div>
                        <div className="form-control">
                            
                        <button className='my-3 btn btn-outline btn-info inline-flex gap-2'><FaGoogle /><span>Login with Google</span></button>
                            
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;