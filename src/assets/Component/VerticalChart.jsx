import React from 'react';
import {
    ComposedChart,
    Bar,
    YAxis,
    ResponsiveContainer,
} from 'recharts';


    return (
        <div className="w-full h-[400px] ml-10 mt-10 mb-20">
            <ResponsiveContainer>
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VerticalChart;