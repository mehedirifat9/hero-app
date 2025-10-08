import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../resources/hero.png'


import { Link } from 'react-router';


const Home = () => {
    return (
        <div className='mt-15 text-center flex flex-col items-center'>
            <h1 className='text-6xl font-semibold text-[#001931]'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='w-9/12 mx-auto mt-10 text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center mt-10 gap-10'>
                <Link target='blank' to='https://play.google.com/store/games?hl=en&pli=1' className='font-semibold border p-3 rounded-lg flex items-center gap-3'><FaGooglePlay /><button>Google Play</button></Link>
                <Link target='blank' to='https://www.apple.com/app-store/' className='font-semibold border-1 p-3 rounded-lg flex items-center gap-3'><FaAppStoreIos />
                    <button>App Store</button></Link>
            </div>
            <img className='w-7/12 mt-10' src={hero} alt="" />
            <div className='rounded-sm h-[380px] w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <h3 className='mt-15 text-4xl text-white font-bold'>Trusted by Millions, Built for You</h3>
                <div className='mt-10 flex justify-evenly'>
                    <div>
                        <p className='text-white font-light mb-3'>Total Downloads</p>
                        <h1 className='text-7xl text-white font-semibold'>29.6M</h1>
                        <p className='text-white font-light mt-3'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-white font-light mb-3'>Total Reviews </p>
                        <h1 className='text-7xl text-white font-semibold'>906K</h1>
                        <p className='text-white font-light mt-3'>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-white font-light mb-3'>Active Apps</p>
                        <h1 className='text-7xl text-white font-semibold'>132+</h1>
                        <p className='text-white font-light mt-3'>31 more will Launch</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;