import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";




const CardDetails = () => {
    const { id } = useParams()
    const appID = parseInt(id)
    const data = useLoaderData()
    const app = data.find(item => item.id === appID)
    console.log(app.title);

    return (
        <div className='flex items-center p-10'>
            <img className='h-[250px] w-[250px] mr-10' src={app.image} alt="" />
            <div className='gap-5'>
                <h3 className='text-3xl font-bold'>{app.title}</h3>
                <p className='pt-2'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>productive.io</span></p>
                <div className='flex gap-20 mb-7'>
                    <div>
                        <PiDownloadSimpleBold className='text-4xl mb-3 mt-5' />
                        <p>Downloads</p>
                        <h1 className='text-4xl font-bold mt-2'>{app.downloads}</h1>
                    </div>
                    <div>
                        <FaStar className='text-4xl mb-3 mt-5' />
                        <p>Average Ratings</p>
                        <h1 className='text-4xl font-bold mt-2'>{app.ratingAvg}</h1>
                    </div>
                    <div>
                        <MdOutlineReviews className='text-4xl mb-3 mt-5' />
                        <p>Total Reviews</p>
                        <h1 className='text-4xl font-bold mt-2'>{app.downloads}</h1>
                    </div>
                </div>
            <Link className='bg-[#00D390] font-bold px-10 py-3 text-white rounded-sm'>Install Now ({app.size}MB)</Link>
            </div>

        </div>
    );
};

export default CardDetails;