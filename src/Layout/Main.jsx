import React from 'react';
import Header from '../Pages/Home/Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer/Footer';

const Main = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            <div>{navigation.state === "loading" && <button className="btn loading">loading</button>}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;