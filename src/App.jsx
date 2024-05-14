import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/Header.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WalletInfoMain from './components/WalletInfoMain';
import CryptoList from './components/CryptoList';
import FooterSection from './components/FooterSection';
import WalletPage from './components/WalletPage';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Header />
              <HeroSection />
              <WalletInfoMain />
              <CryptoList />
              <FooterSection />
            </div>
          }
        />

        <Route
          path='/login'
          element={
            <div
              style={{
                backgroundColor: '#000',
                minHeight: '100vh',
                color: '#fff',
              }}
            >
              <LoginForm />
            </div>
          }
        />
        <Route
          path='/register'
          element={
            <div
              style={{
                backgroundColor: '#000',
                minHeight: '100vh',
                color: '#fff',
              }}
            >
              <RegistrationForm />
            </div>
          }
        />
        <Route
          path='/wallet'
          element={
            <div
              style={{
                backgroundColor: '#000',
                minHeight: '100vh',
                color: '#fff',
              }}
            >
              <WalletPage />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
