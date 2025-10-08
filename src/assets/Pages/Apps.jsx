import React from 'react';
import { useLoaderData } from 'react-router';
import AllData from '../Component/AllData';

const Apps = () => {
    const allDatas = useLoaderData()
    console.log(allDatas.length);
    return (
        <div>
            <div className='mt-15 mb-10 text-center'>
                <h3 className='text-[#001931] text-5xl font-bold'>Our All Applications</h3>
                <p className='mt-5 text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex justify-between mt-10'>
                    <p className='font-bold'>({allDatas.length}) Apps Found</p>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                {
                    allDatas.map(data => <AllData data={data}></AllData>)
                }
            </div>
        </div>
    );
};

export default Apps;