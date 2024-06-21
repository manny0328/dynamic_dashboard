import React, { useEffect, useState } from 'react';
import { fetchCryptoData } from '../services/api';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchCryptoData();
      setData(result);
    };
    getData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Current Price</th>
          <th>Market Cap</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {data.map(crypto => (
          <tr key={crypto.id}>
            <td>{crypto.name}</td>
            <td>${crypto.current_price.toFixed(2)}</td>
            <td>${crypto.market_cap.toLocaleString()}</td>
            <td>${crypto.total_volume.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
