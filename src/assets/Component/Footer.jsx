import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";




const Footer = () => {
    return (
        <div className=''>
            <footer className="mt-20 rounded-t-xl footer footer-horizontal footer-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-primary-content p-10">
                <aside>
                    
                    <p className="font-bold text-3xl">
                        HERO.IO
                        
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Mehedi Hasan</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-10 text-3xl">
                        <a target='_blank' href="https://www.facebook.com"><FaFacebook /></a>
                        <a target='_blank' href="https://www.linkedin.com/"><FaLinkedin /></a>
                        <a target='_blank' href="https://www.whatsapp.com/?lang=en"><BsWhatsapp /></a>


                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;