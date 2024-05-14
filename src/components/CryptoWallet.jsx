// CryptoWallet.js

import React from 'react';
import '../css/CryptoWallet.css';

const CryptoWallet = ({ assets }) => {
  return (
    <div className='container'>
      <header className='header'>
        <h1>My Crypto Wallet</h1>
        <p>Welcome to your digital assets manager</p>
      </header>

      <div className='wallet'>
        {assets.map((asset) => (
          <div key={asset.id} className='asset'>
            <h2>{asset.name}</h2>
            <p>Symbol: {asset.symbol}</p>
            <p>Balance: {asset.balance}</p>
            <p>Price: ${asset.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoWallet;
