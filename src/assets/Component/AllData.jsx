import React from 'react';
import { IoMdCodeDownload, IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const AllData = ({ data }) => {
    // console.log(data.id);
    return (
        <Link to={`/details/${data.id}`}>
            <div className='shadow-xl/30 m-10 lg:m-0 px-3 py-5 mb-15 top-6 transition delay-100 duration-200 hover:-translate-y-5'>
                <img className=' mx-auto text-center lg:h-[150px] lg:w-[150px]' src={data.image} alt="" />
                <p className='mt-5 mb-5 text-center'>{data.title}</p>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1 bg-[#F1F5E8]'>
                        <IoMdDownload className='text-[#00D390]' />
                        <p className='text-[#00D390]'>{data.downloads}</p>
                    </div>
                    <div className='bg-[#FFF0E1] flex items-center gap-1'>
                        <FaStar className='text-[#FF8811]' />
                        <p className='-[#FF8811]'>{data.ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AllData;