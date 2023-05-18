import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();


const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'
    const { logInUser, logInGoogleUser, setUser, setLoading, updateProfileInfo, error, setError } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        logInUser(email, password)
            .then(result => {

                setUser(result.user)
                form.reset()
                navigate(from)
                setError("")
            })
            .catch(error => setError(error.message))
    }
    const handleGoogleLogIn = event => {
        logInGoogleUser(googleProvider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                setUser(result.user);
                navigate(from)
                setError("")
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content lg:w-1/2 text-center">

                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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

                            <button onClick={handleGoogleLogIn} className='my-3 btn btn-outline btn-info inline-flex gap-2'><FaGoogle /><span>Login with Google</span></button>

                        </div>
                        <div className="form-control">

                            <p className='text-red-500'>{error}</p>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;