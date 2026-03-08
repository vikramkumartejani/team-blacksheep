import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const TermsOfService: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] my-8 text-center min-h-screen">
                Terms of Service
            </h1>
            <Footer />
        </div>
    );
};

export default TermsOfService;
