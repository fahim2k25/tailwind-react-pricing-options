import React, { use } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BoxofficeChart = ({ boxOfficePromise }) => {
    const boxOffice = use(boxOfficePromise);
    const boxOfficeData = boxOffice.data;

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <h2>RESPONSIVE bOXOFFICE CHART</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={boxOfficeData} width={500} height={300}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>

                    <Bar dataKey="box_office_worldwide" fill='blue' ></Bar>
                    <XAxis dataKey="title"></XAxis>
                    <YAxis></YAxis>

                    <CartesianGrid strokeDasharray="3 3" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BoxofficeChart;