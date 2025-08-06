import React, { use } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const BoxofficeChart = ({ boxOfficePromise }) => {
    const boxOffice = use(boxOfficePromise);
    const boxOfficeData = boxOffice.data;

    return (
        <div style={{ width: '100%', height: '400px', marginTop: '100px', marginBottom: '50px' }}>
            <h2 className='text-4xl font-bold text-center my-3'>bOXOFFICE CHART</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={boxOfficeData} width={1000} height={800}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>

                    <Bar dataKey="box_office_worldwide" fill='blue' ></Bar>
                    <Bar dataKey="imdb_rating" fill='red' ></Bar>
                    <Bar dataKey="rotten_tomatoes_score" fill='green' ></Bar>
                    <XAxis dataKey="title"></XAxis>
                    <YAxis></YAxis>
                    <Legend></Legend>
                    <CartesianGrid strokeDasharray="3 3" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BoxofficeChart;