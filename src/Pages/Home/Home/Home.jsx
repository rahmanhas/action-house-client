import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useDynamicTitle from '../../../CustomHook/UseDynamicTitle';
import Services from '../Services/Services';
import Review from '../Review/Review';

const Home = () => {
    useDynamicTitle("Action House")
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            {/* Extra Section-1 */}
            <Services></Services>
            {/* Extra Section-2 */}
            <Review></Review>
        </div>
    );
};

export default Home;