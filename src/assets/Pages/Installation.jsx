import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { addToLS } from '../ls';
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';

const Installation = () => {
    const [application, setApplication] = useState([])
    const data = useLoaderData()
    useEffect(() => {
        const appDatas = addToLS()
        const convertAppData = appDatas.map(id => parseInt(id))
        const installedApps = Array.isArray(data) && data.filter(apps => convertAppData.includes(apps.id))
        setApplication(installedApps);
    },[])

    const removeApps = (id) => {
        const cartApp = localStorage.getItem("appList")
        const appParse = JSON.parse(cartApp)
        const updateLS = appParse.filter(cartID => cartID !== id)
        localStorage.setItem('appList', JSON.stringify(updateLS));
        toast("Application Uninstalled")

        // console.log(id);
        // console.log(appParse);
    }
    return (
        <div>
            <h3 className='text-center text-5xl font-bold mb-5'>Your Installed Apps</h3>
            <p className='text-center'>Explore All Trending Apps on the Market developed by us</p>
            <h3 className='mt-5 font-bold'>Apps Found: {application.length}</h3>
            {
                Array.isArray(application) && application.map(data => <div key={data.id}>
                    <div className='lg:flex grid justify-center lg:justify-between mt-10 items-center'>
                        <div className='flex justify-center items-center gap-5 mb-10'>
                            <img className='h-[80px] w-[80px] rounded-lg'
                                src={data.image} alt="" />
                            <div>
                                <p className='font-bold'>{data.title}</p>
                                <div className='lg:flex gap-5 mt-3'>
                                    <div className='flex items-center gap-1'>
                                        <IoMdDownload className='text-[#00D390]' />
                                        <p className='text-[#00D390]'>{data.downloads}</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-[#FF8811]' />
                                        <p className='text-[#FF8811]'>{data.ratingAvg}</p>
                                    </div>
                                    <div>
                                        <p className='text-[#627382]'>{data.size}MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <a><button onClick={() => removeApps(data.id)} className='bg-[#00D390] px-6 py-2 text-white font-bold'>Uninstall</button></a>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Installation;