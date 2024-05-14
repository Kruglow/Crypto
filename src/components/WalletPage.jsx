import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WalletInfo from './WalletInfo';
import Header from './HeaderWalletPage';
import BalanceChart from './BalanceChart';
import PieChart from './PieChart';
import TransactionTable from './TransactionTable';
import { Container, Grid, Box, Typography } from '@mui/material';

const WalletPage = () => {
  const [currencies, setCurrencies] = useState([
    { id: 'BTC', name: 'Bitcoin', balance: 2.4, rate: 0 },
    { id: 'ETH', name: 'Ethereum', balance: 10.4, rate: 0 },
    { id: 'LTC', name: 'Litecoin', balance: 15.0, rate: 0 },
  ]);
  const handleLanguageChange = (lang) => {
    console.log(`Language changed to ${lang}`);
  };
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD&api_key=your_api_key_here`
        );
        setCurrencies(
          currencies.map((currency) => ({
            ...currency,
            rate: response.data[currency.id]
              ? response.data[currency.id].USD
              : 0,
          }))
        );
      } catch (error) {
        console.error('Error fetching currency rates', error);
      }
    };

    fetchRates();
  }, []);

  return (
    <div>
      <Header onLanguageChange={handleLanguageChange} />
      <Container maxWidth='lg'>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          minHeight='100vh'
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <WalletInfo currencies={currencies} />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <PieChart currencies={currencies} />

            <BalanceChart currencies={currencies} /> */}
              <TransactionTable />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default WalletPage;
