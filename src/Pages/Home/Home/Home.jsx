import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useDynamicTitle from '../../../CustomHook/UseDynamicTitle';
import Services from '../Services/Services';


const Home = () => {
    useDynamicTitle("Action House")
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            {/* Bonus Section-1 */}
            <Services></Services>
            
        </div>
    );
};

export default Home;