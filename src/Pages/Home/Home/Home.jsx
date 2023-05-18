import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
        </div>
    );
};

export default Home;