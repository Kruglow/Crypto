import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

const Header = ({ onLanguageChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (lang) => {
    onLanguageChange(lang);
    handleClose();
  };

  return (
    <AppBar position='static' style={{ marginBottom: '20px' }}>
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Crypto Wallet
        </Typography>
        <Button color='inherit' component={Link} to='/'>
          Home
        </Button>
        <IconButton color='inherit' onClick={handleMenu}>
          <LanguageIcon />
        </IconButton>
        <Menu
          id='language-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleLanguageSelect('en')}>
            English
          </MenuItem>
          <MenuItem onClick={() => handleLanguageSelect('ru')}>
            Русский
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
