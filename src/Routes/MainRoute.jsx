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
import UpdateToys from '../Pages/UpdateToys/UpdateToys';
import SingleToyDetails from '../Pages/SingleToyDetails/SingleToyDetails';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element: <AllToys></AllToys>,
            },
            {
                path: "mytoys",
                element: <MyToys></MyToys>
            },
            {
                path: "updatetoy/:id",
                element: <UpdateToys></UpdateToys>,
                loader: ({params})=>fetch(`https://action-house-server.vercel.app/storedtoydata/${params.id}`)
            },
            {
                path: "toy/:id",
                element: <SingleToyDetails></SingleToyDetails>,
                loader: ({params})=>fetch(`https://action-house-server.vercel.app/storedtoydata/${params.id}`)
            },
        ]
        
    },
]);




export default MainRoute;