import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useDynamicTitle from '../../../CustomHook/UseDynamicTitle';


const Home = () => {
    useDynamicTitle("Action House")
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            
        </div>
    );
};

export default Home;