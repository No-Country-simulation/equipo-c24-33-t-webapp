// eslint-disable-next-line no-unused-vars
import React from 'react';
import Inicio from '../components/Home';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import '../assets/styles/Home.css';

const Home = () => {
    return (
        <div>
            <div style={{ margin: '0', padding: '0' }}>
                <Inicio />
                <Features />
                <Benefits />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
