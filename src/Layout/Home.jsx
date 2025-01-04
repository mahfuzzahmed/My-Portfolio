import React from 'react';
import Banner from '../Pages/Banner/Banner';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Skills from '../Pages/Skills/Skills';
import Education from '../Pages/Education/Education';
import Cardstack from '../Pages/CardStack/Cardstack';
import ContactMe from '../Pages/Contactme/ContactMe';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div data-aos="fade-up" className="divider divider-neutral"></div>
            <AboutMe></AboutMe>
            <div data-aos="fade-up" className="divider divider-neutral"></div>
            <Skills></Skills>
            <div data-aos="fade-up" className="divider divider-neutral"></div>
            <Education></Education>
            <div data-aos="fade-up" className="divider divider-neutral"></div>
            <h2 className='text-7xl font-extrabold text-center py-6'>My Projects</h2>
            <Cardstack></Cardstack>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;