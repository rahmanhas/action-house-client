import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home/Home';
import LogIn from '../Pages/Login/LogIn';
import Main from '../Layout/Main';
import Register from '../Pages/Register/Register';
import AddToy from '../Pages/AddToy/AddToy';
import Blog from '../Pages/Blogs/Blog';
import AllToys from '../Pages/AllToys/AllToys';
import MyToys from '../Pages/MyToys/MyToys';

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "addtoy",
                element: <AddToy></AddToy>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "mytoys",
                element: <MyToys></MyToys>
            },
        ]
    },
]);




export default MainRoute;