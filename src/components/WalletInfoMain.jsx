import React, { useState, useEffect } from 'react';
import '../css/WalletInfo.css';

const WalletInfoMain = () => {
  const [transactions, setTransactions] = useState(145234);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransactions((prevTransactions) => prevTransactions + 1); // Увеличиваем на 1 каждые 3 секунды
    }, 3000);

    return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
  }, []);

  return (
    <div className='wallet-info'>
      <h2>Безопасный криптокошелек</h2>
      <p>
        Ваша безопасность - наш приоритет. <br /> Мы используем передовые
        технологии шифрования для защиты ваших средств и данных. <br /> Наш
        криптокошелек обеспечивает безопасное хранение и передачу вашей
        криптовалюты, чтобы вы могли спокойно управлять своими активами. <br />{' '}
        Ваша приватность и защита - наша забота
      </p>
      <div className='transaction-counter'>
        <p>Проведено транзакций:</p>
        <div className='counter'>{transactions}</div>
      </div>
    </div>
  );
};

export default WalletInfoMain;
