import React from 'react';
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';



const TrendingData = ({ data }) => {
    // console.log(data);
    return (
        <Link to={`/details/${data.id}`}>
            <div className=' shadow-xl/30 px-3 py-5 mb-15 top-6 transition delay-100 duration-200 hover:-translate-y-5'>
                <img className=' mx-auto text-center h-[150px] w-[150px]' src={data.image} alt="" />
                <p className='mt-5 mb-5'>{data.title}</p>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1 bg-[#F1F5E8]'>
                        <IoMdDownload className='text-[#00D390]' />
                        <p className='text-[#00D390]'>9M</p>
                    </div>
                    <div className='bg-[#FFF0E1] flex items-center gap-1'>
                        <FaStar className='text-[#FF8811]' />
                        <p className='-[#FF8811]'>5</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingData;

