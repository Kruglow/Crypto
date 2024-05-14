// Header.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import { Menu, MenuItem, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en'); // Стейт для выбранного языка
  const [showLanguages, setShowLanguages] = useState(false); // Стейт для показа списка языков
  const [showMenu, setShowMenu] = useState(false); // Стейт для показа мобильного меню
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLanguageMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    handleCloseLanguageMenu();
  };
  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };
  const handleLogin = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/register');
  };
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguages(false); // Скрываем список языков после выбора
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <div className='logo'>
            <h1>Crypto Wallet</h1>
          </div>
          <nav className={`navbar ${showMenu ? 'active' : ''}`}>
            <div className='nav-links'>
              <Button
                variant='contained'
                color='primary'
                onClick={handleLogin}
                startIcon={<LoginIcon />}
                style={{ marginRight: '10px' }}
              >
                Войти
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={handleRegister}
              >
                Регистрация
              </Button>
              <IconButton
                aria-label='language'
                aria-controls='language-menu'
                aria-haspopup='true'
                onClick={handleLanguageMenu}
                color='inherit'
              >
                <LanguageIcon />
              </IconButton>
              <Menu
                id='language-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseLanguageMenu}
              >
                <MenuItem onClick={() => handleSelectLanguage('en')}>
                  EN
                </MenuItem>
                <MenuItem onClick={() => handleSelectLanguage('ru')}>
                  RU
                </MenuItem>
              </Menu>
              {/* <a href='#about'>О нас</a> */}
            </div>
            <div className='menu-icon' onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
