import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { fetchPriceTrends } from '../services/api';

const CryptoLineChart = ({ cryptoId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchPriceTrends(cryptoId);
      setData(result.map(d => ({ date: new Date(d[0]).toLocaleDateString(), price: d[1] })));
    };
    getData();
  }, [cryptoId]);

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="price" stroke="#ff7300" yAxisId={0} />
    </LineChart>
  );
};

export default CryptoLineChart;
