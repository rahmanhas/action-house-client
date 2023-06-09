import React from 'react';
import Header from '../Pages/Home/Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    AOS.init();
    const navigation = useNavigation()
    return (
        <div className='bg-blue-50'>
            <Header></Header>
            <div>{navigation.state === "loading" && <button className="btn loading">loading</button>}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;