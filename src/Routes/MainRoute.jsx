import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home/Home';
import LogIn from '../Pages/Login/LogIn';
import Main from '../Layout/Main';
import Register from '../Pages/Register/Register';

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
        ]
    },
]);




export default MainRoute;