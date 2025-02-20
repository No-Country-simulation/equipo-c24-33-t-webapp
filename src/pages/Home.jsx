// eslint-disable-next-line no-unused-vars
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar'; 
import Inicio from '../components/Home';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Automation from '../components/Automation';
import Security from '../components/Security';
import Contact from '../components/Contact';
import '../assets/styles/Home.css';
const Home = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <Inicio />
            <Features />
            <Benefits />
            <Automation />
            <Security />
            <Contact />
        </div>
    );
};

export default Home;
