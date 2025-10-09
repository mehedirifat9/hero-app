import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllData from '../Component/AllData';

const Apps = () => {
    const allDatas = useLoaderData()
    console.log(allDatas);

    const [search, setSearch] = useState("")
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term ? 
    allDatas.filter(data => data.title.toLocaleLowerCase().includes(term))
    : allDatas
    console.log(searchedProducts);


    return (
        <div>
            <div className='mt-15 mb-10 text-center'>
                <h3 className='text-[#001931] text-5xl font-bold'>Our All Applications</h3>
                <p className='mt-5 text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='lg:flex justify-between mt-10'>
                    <p className='font-bold mb-5 lg:mb-0'>({allDatas.length}) Apps Found</p>
                    <label className="input">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 gap-10 mx-auto lg:max-w-4xl'>
                {
                    searchedProducts.map(data => <AllData key={data.id} data={data}></AllData>)
                }
            </div>
        </div>
    );
};

export default Apps;