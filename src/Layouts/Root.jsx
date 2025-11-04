import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/common/Navbar'

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <nav><Navbar></Navbar> </nav>
            <main className=''>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Root;