import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import '../css/CryptoList.css';


const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coinlore.net/api/tickers/'
        );
        setCryptoData(response.data.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='cryptoLists'>

      <div className='crypto-container'>
        <div className='crypto-grid'>
          {cryptoData.map((crypto) => (
            <div key={crypto.id} className='crypto-item'>
              <div className='crypto-info'>
                <h3>{crypto.name}</h3>
                <p>{crypto.symbol}</p>
              </div>
              <div className='crypto-price'>
                ${parseFloat(crypto.price_usd).toFixed(2)}
              </div>

              <div className='crypto-change'>
                <span
                  className={
                    parseFloat(crypto.percent_change_24h) > 0 ? 'up' : 'down'
                  }
                >
                  {parseFloat(crypto.percent_change_24h).toFixed(2)}%
                  {parseFloat(crypto.percent_change_24h) > 0 ? (
                    <TiArrowSortedUp className='up' />
                  ) : (
                    <TiArrowSortedDown className='down' />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
