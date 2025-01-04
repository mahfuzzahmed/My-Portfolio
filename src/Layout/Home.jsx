import React from 'react';
import Banner from '../Pages/Banner/Banner';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Skills from '../Pages/Skills/Skills';
import Education from '../Pages/Education/Education';
import CardStack from '../Pages/CardStack';

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
            <CardStack></CardStack>
        </div>
    );
};

export default Home;