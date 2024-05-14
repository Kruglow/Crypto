import React from 'react';
import '../css/CryptoIconsSection.css'; // Подключаем стили для секции

const CryptoIconsSection = () => {
  return (
    <section className='crypto-icons-section'>
      <div className='container'>
        <div className='crypto-icons-content'>
          <div className='crypto-icons'>
            <img
              src='https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Crypto Icons'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoIconsSection;
