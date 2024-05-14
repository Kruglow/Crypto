import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  Grid,
} from '@mui/material';
import CurrencyInfo from './CurrencyInfo';
import WithdrawModal from './WithdrawModal';

const WalletInfo = ({ currencies }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const totalUSD = currencies.reduce(
    (sum, currency) => sum + currency.balance * currency.rate,
    0
  );

  return (
    <Card
      style={{
        backgroundColor: '#222',
        color: '#fff',
        padding: '20px',
        marginTop: '0px',
      }}
    >
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        marginBottom={2}
      ></Box>
      <Typography variant='h4' gutterBottom textAlign='center'>
        Баланс кошелька
      </Typography>
      {currencies.map((currency) => (
        <CurrencyInfo key={currency.id} currency={currency} />
      ))}
      <Typography variant='h5' textAlign='center'>
        Общий баланс: {totalUSD.toFixed(2)} USD
      </Typography>
      <Box display='flex' justifyContent='center' marginTop={2}>
        <Button variant='contained' color='secondary' onClick={handleOpenModal}>
          Вывести средства
        </Button>
        <WithdrawModal open={isModalOpen} onClose={handleCloseModal} />
      </Box>
    </Card>
  );
};

export default WalletInfo;
