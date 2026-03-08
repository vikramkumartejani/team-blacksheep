import React from 'react';
import Hero from '../components/home/Hero';
import NewProducts from '../components/home/NewProducts';
import LevelSelection from '../components/home/LevelSelection';
import BestEquipment from '../components/home/BestEquipment';
import InstagramFeed from '../components/home/InstagramFeed';
import Features from '../components/home/Features';
import CookiesModal from '../components/CookiesModal';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <NewProducts />
            <LevelSelection />
            <BestEquipment />
            <InstagramFeed />
            <Features />
            <Footer />
            <CookiesModal />
        </div>
    );
};

export default Home;
