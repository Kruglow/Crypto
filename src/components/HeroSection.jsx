import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div className='hero-container'>
      <h1>Welcome to Our Crypto Wallet</h1>
      <p>Start managing your cryptocurrency assets today.</p>
      <button onClick={handleLogin} className='btn'>
        Sign Up
      </button>
    </div>
  );
};

export default HeroSection;
