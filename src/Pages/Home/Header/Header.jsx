import React from 'react';
import useDynamicTitle from '../../../CustomHook/UseDynamicTitle';
import logo from "../../../../public/vite.svg"
import { Link, NavLink } from 'react-router-dom';
import UseProfileImageHoverName from '../../../Component/UseProfileImageHoverName';

const user = { displayName: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80" }


const handleLogOut = () =>{
    console.log("log out");
}
const NavMenu = <>
    <li><NavLink to={`/`} className={({ isActive }) => isActive ? "bg-blue-500 text-lg text-black mr-2 p-2" : ""}>Home</NavLink></li>
    <li><NavLink to={`/alltoys`} className={({ isActive }) => isActive ? "bg-blue-500 text-lg text-black mr-2 p-2" : ""}>All Toys</NavLink></li>
    <li><NavLink to={`/mytoys`} className={({ isActive }) => isActive ? "bg-blue-500 text-lg text-black mr-2 p-2" : ""}>My Toys</NavLink></li>
    <li><NavLink to={`/addtoy`} className={({ isActive }) => isActive ? "bg-blue-500 text-lg text-black mr-2 p-2" : ""}>Add a Toy</NavLink></li>
    <li><NavLink to={`/blog`} className={({ isActive }) => isActive ? "bg-blue-500 text-lg text-black mr-2 p-2" : ""}>Blog</NavLink></li>
</>
const userImage = <>
    <UseProfileImageHoverName
        src={user.photoURL}
        alt={user.displayName}
        title={user.displayName}
        style={{ maxWidth: "100%" }}
    />
</>
const logInButton = <>
    <Link className='btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black' to="/login">Log in</Link>
</>
const logOutButton = <>
    <button className='btn btn-primary bg-blue-500 hover:bg-blue-800 border-0 text-black' onClick={handleLogOut}>Log Out</button>
</>

const Header = () => {
    useDynamicTitle("Action House")
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavMenu}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <img className='h-[60px]' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            {userImage}
                            {logOutButton}
                        </> :
                        { logInButton }
                }
            </div>
        </div>
    );
};

export default Header;