import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/';

export const fetchCryptoData = async () => {
  const response = await axios.get(`${API_URL}coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      sparkline: false,
    },
  });
  return response.data;
};

export const fetchPriceTrends = async (cryptoId, days = 30) => {
  const response = await axios.get(`${API_URL}coins/${cryptoId}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days: days,
    },
  });
  return response.data.prices;
};
