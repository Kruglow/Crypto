import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const initialTransactions = [
  { date: '2023-05-01', type: 'Deposit', amount: '1.000', currency: 'BTC' },
  { date: '2023-05-02', type: 'Withdrawal', amount: '0.500', currency: 'ETH' },
  { date: '2023-05-03', type: 'Deposit', amount: '5.000', currency: 'LTC' },
  // Добавьте больше транзакций для демонстрации
  { date: '2023-05-04', type: 'Deposit', amount: '2.300', currency: 'BTC' },
  { date: '2023-05-05', type: 'Withdrawal', amount: '1.200', currency: 'ETH' },
  { date: '2023-05-06', type: 'Deposit', amount: '0.900', currency: 'LTC' },
];

const TransactionTable = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.date.toLowerCase().includes(search) ||
      transaction.type.toLowerCase().includes(search) ||
      transaction.amount.toLowerCase().includes(search) ||
      transaction.currency.toLowerCase().includes(search)
  );

  return (
    <Paper style={{ marginTop: '20px', overflowX: 'auto', padding: '20px' }}>
      <TextField
        fullWidth
        variant='outlined'
        placeholder='Search Transactions'
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTransactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TransactionTable;
