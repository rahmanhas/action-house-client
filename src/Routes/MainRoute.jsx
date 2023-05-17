import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home/Home';

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
]);




export default MainRoute;