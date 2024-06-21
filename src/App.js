// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CryptoLineChart from './components/LineChart';
import CryptoBarChart from './components/BarChart';
import DataTable from './components/DataTable';
import Dropdown from './components/Dropdown';
import { fetchCryptoData } from './services/api';
import './App.css';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCryptoData();
      setCryptoData(data);
    };
    getData();
  }, []);

  const cryptoOptions = cryptoData.map(crypto => crypto.id);

  return (
    <div className="App">
      <Header />
      <Dropdown
        options={cryptoOptions}
        selectedOption={selectedCrypto}
        onSelect={setSelectedCrypto}
      />
      <div className="content">
        <CryptoLineChart cryptoId={selectedCrypto} />
        <CryptoBarChart />
        <DataTable />
      </div>
    </div>
  );
};

export default App;
