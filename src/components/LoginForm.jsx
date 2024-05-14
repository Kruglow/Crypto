import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь должна быть логика проверки email и password
    // Предположим, что проверка прошла успешно:
    console.log('Login success for:', email, password);
    navigate('/wallet'); // Перенаправление на страницу кошелька
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
      style={{ backgroundColor: '#000', color: '#fff', height: '100vh' }}
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        minHeight='100vh'
      >
        <Paper style={{ padding: 40, width: '100%', boxSizing: 'border-box' }}>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            marginBottom={2}
          >
            <h1>Crypto Wallet</h1>
            <Typography variant='h5'>Вход в систему</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label='Email'
              type='email'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin='normal'
            />
            <TextField
              label='Пароль'
              type='password'
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin='normal'
            />
            <Button type='submit' color='primary' variant='contained' fullWidth>
              Войти
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default LoginForm;
