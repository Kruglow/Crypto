import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Box,
} from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
    setErrors({ ...errors, [prop]: '' }); // Clear errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Registering:', formData);
      // Logic to handle actual registration
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = 'Username is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.password) tempErrors.password = 'Password is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <Container component='main' maxWidth='xs' style={{ height: '100vh' }}>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height='100%'
      >
        <Paper style={{ padding: 20, width: '100%' }}>
          <Typography variant='h6' gutterBottom>
            Регистрация
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label='Имя пользователя'
              fullWidth
              value={formData.username}
              onChange={handleChange('username')}
              margin='normal'
              error={!!errors.username}
              helperText={errors.username}
            />
            <TextField
              label='Электронная почта'
              type='email'
              fullWidth
              value={formData.email}
              onChange={handleChange('email')}
              margin='normal'
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label='Пароль'
              type='password'
              fullWidth
              value={formData.password}
              onChange={handleChange('password')}
              margin='normal'
              error={!!errors.password}
              helperText={errors.password}
            />
            <Box textAlign='center' marginTop={2}>
              <Button type='submit' color='primary' variant='contained'>
                Регистрироваться
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
