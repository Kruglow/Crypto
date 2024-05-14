import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const TransactionList = ({ transactions }) => {
  return (
    <Paper
      style={{
        maxHeight: 300,
        overflow: 'auto',
        backgroundColor: '#424242',
        color: '#fff',
      }}
    >
      <List>
        {transactions.map((transaction, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${transaction.type}: ${transaction.amount} BTC`}
              secondary={transaction.date}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TransactionList;
