import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const WithdrawModal = ({ open, onClose }) => {
  const [stage, setStage] = useState(0);

  const packages = [
    { title: 'Package 1', price: 50 },
    { title: 'Package 2', price: 500 },
    { title: 'Package 3', price: 1000 },
    { title: 'Package 4', price: 5000 },
  ];

  const handleOpenPackages = () => setStage(1);
  const handleTransfer = () => {
    alert('Transfer to another wallet within the system!');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      {stage === 0 && (
        <>
          <DialogTitle>Вывести средства</DialogTitle>
          <DialogContent>
            <Typography>
              Вы можете вывести средства только при покупке пакета или переводе
              на другой кошелек в системе.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOpenPackages}>Купить пакет</Button>
            <Button onClick={handleTransfer}>
              Перевести на другой кошелек
            </Button>
          </DialogActions>
        </>
      )}
      {stage === 1 && (
        <>
          <DialogTitle>Выберите пакет</DialogTitle>
          <List>
            {packages.map((pkg, index) => (
              <ListItem
                button
                key={index}
                onClick={() =>
                  alert(`You selected ${pkg.title} for $${pkg.price}`)
                }
              >
                <ListItemText primary={pkg.title} secondary={`$${pkg.price}`} />
              </ListItem>
            ))}
          </List>
          <DialogActions>
            <Button onClick={() => setStage(0)}>Назад</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default WithdrawModal;
