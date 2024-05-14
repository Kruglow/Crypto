import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';

const icons = {
  BTC: 'https://www.cryptocompare.com/media/37746251/btc.png',
  ETH: 'https://www.cryptocompare.com/media/37746238/eth.png',
  LTC: 'https://www.cryptocompare.com/media/37746243/ltc.png',
};

const CurrencyInfo = ({ currency }) => {
  return (
    <Card
      style={{ marginBottom: '10px', backgroundColor: '#333', color: '#fff' }}
    >
      <CardContent>
        <Box display='flex' alignItems='center'>
          <img
            src={icons[currency.id]}
            alt={`${currency.name} icon`}
            style={{ width: 30, marginRight: 8 }}
          />
          <Typography variant='h6'>{currency.name}</Typography>
        </Box>
        <Typography variant='body1'>
          {currency.balance} {currency.id.toUpperCase()}
        </Typography>
        <Typography variant='body2'>
          {(currency.balance * currency.rate).toFixed(2)} USD
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrencyInfo;
