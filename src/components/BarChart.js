import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { fetchCryptoData } from '../services/api';

const CryptoBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchCryptoData();
      setData(result.map(d => ({ name: d.name, marketCap: d.market_cap })));
    };
    getData();
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="marketCap" fill="#8884d8" />
    </BarChart>
  );
};

export default CryptoBarChart;
