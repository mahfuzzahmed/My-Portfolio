import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='relative container mx-auto'>
            <div className='sticky top-0 z-50'><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;