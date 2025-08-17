import React from 'react';
import DestCard from '../components/DestCard';
import CountryGrid from '../components/CountryGrid';
import Footer from '../components/Footer';

function Destination() {
    return (
        <>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-center mb-6 sm:mb-8">
                BROWSE BY POPULAR DESTINATIONS
            </h2>
            <DestCard />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-center mb-6 sm:mb-8 mt-12 sm:mt-16">
                BROWSE BY COUNTRIES
            </h2>
            <CountryGrid />
            <Footer />
        </div>
        </>
    );
}

export default Destination;