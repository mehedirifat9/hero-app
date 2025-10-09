import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import LoadingSpinner from '../Component/LoadingSpinner';

const MainLayout = () => {
    const navigation = useNavigation()

    return (
        <div>
            <Navbar></Navbar>
            {navigation ?.state === 'loading' ? (<LoadingSpinner/>) :
             (<Outlet></Outlet>)
            }

            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;