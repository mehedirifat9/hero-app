import React, { useState } from 'react';
import { Link, NavLink, useLoaderData, useParams } from 'react-router';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import {
    ComposedChart,
    Bar,
    YAxis,
    ResponsiveContainer,
    XAxis,
    LabelList,
} from 'recharts';
import { getFromLS } from '../ls';
import { toast } from 'react-toastify';

const CardDetails = () => {

    const { id } = useParams()
    const appID = parseInt(id)
    const data = useLoaderData()
    const app = Array.isArray(data) && data.find(item => item.id === appID)
    const ratingsData = app.ratings
    const [installed, setInstalled] = useState(false);
    const handleInstall = (id) => {
        getFromLS(id)
        setInstalled(true);
        toast("Installed Sucessfully")
    }

    const chartData = ratingsData.map(rating => (
        {
            name: rating.name,
            count: rating.count,
            uv: 590,
            pv: 800,
            amt: 1400
        }

    ));
    return (
        <div>
            {/* Details Card Starts Here  */}
            <div className='lg:flex items-center p-10'>
                <img className='h-[250px] w-[250px] mr-10' src={app.image} alt="" />
                <div className='lg:gap-5'>
                    <h3 className='text-3xl font-bold text-center lg:text-start mt-5 lg:mt-0'>{app.title}</h3>
                    <p className='pt-2 lg:text-start text-center'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>productive.io</span></p>
                    <div className='lg:flex gap-20 mb-7'>
                        <div className='flex lg:grid items-center justify-center'>
                            <PiDownloadSimpleBold className='text-4xl mb-3 mt-5' />
                            <p className='hidden lg:block'>Downloads</p>
                            <h1 className='text-4xl font-bold mt-2 ml-3 lg:ml-0'>{app.downloads}</h1>
                        </div>
                        <div className='flex lg:grid items-center justify-center'>
                            <FaStar className='text-4xl mb-3 mt-5' />
                            <p className='hidden lg:block'>Average Ratings</p>
                            <h1 className='text-4xl font-bold mt-2 ml-3 lg:ml-0'>{app.ratingAvg}</h1>
                        </div>
                        <div className='flex lg:grid items-center justify-center'>
                            <MdOutlineReviews className='text-4xl mb-3 mt-5' />
                            <p className='hidden lg:block'>Total Reviews</p>
                            <h1 className='text-4xl font-bold mt-2 ml-3 lg:ml-0'>{app.downloads}</h1>
                        </div>
                    </div>
                    <a className='flex lg:grid justify-center lg:justify-start'><button className={` items-center font-bold px-10 py-3 text-white rounded-sm ${installed ? "bg-[#32e2aa]" : "bg-[#00D390]"}`} onClick={() => handleInstall(app.id)} disabled={installed}>{installed ? "Installed" : `Install (${app.size}MB)`} </button></a>
                </div>
            </div>
            {/* Recharts Starts Here  */}
            <div className="w-10/12 lg:h-[400px] h-[300px] mt-10 mb-20">
                <h3 className='lg:ml-15 ml-5 mb-5 font-bold'>Ratings Details</h3>
                <ResponsiveContainer>
                    <ComposedChart
                        layout="vertical"
                        width={500}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 40,
                            bottom: 20,
                            left: 40,
                        }}
                    >
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Bar dataKey="count" barSize={25} fill="#9F62F2" radius={[5, 5, 5, 5]}>
                            <LabelList dataKey="count" position="right" className='text-sm font-semibold' />
                        </Bar>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h3 className='lg:ml-15 mb-5 mx-4 font-bold'>Description</h3>
                <p className='lg:ml-15 mb-5 mx-4 text-justify lg:text-left'>{app.description}</p>
            </div>
        </div>
    );
};

export default CardDetails;