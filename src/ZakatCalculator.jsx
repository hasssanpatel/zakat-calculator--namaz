// src/ZakatCalculator.jsx
import React, { useState } from 'react';
import './ZakatCalculator.css';

const ZakatCalculator = () => {
  const [cash, setCash] = useState('');
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [liabilities, setLiabilities] = useState('');
  const [zakat, setZakat] = useState(null);

  const calculateZakat = () => {
    const totalAssets = parseFloat(cash) + parseFloat(gold) + parseFloat(silver);
    const netAssets = totalAssets - parseFloat(liabilities);
    const zakatAmount = netAssets > 0 ? (netAssets * 0.025).toFixed(2) : 0;
    setZakat(zakatAmount);
  };

  return (
    <div className="zakat-calculator">
      <h1>Zakat Calculator</h1>
      <div className="form-group">
        <label htmlFor="cash">Cash:</label>
        <input
          type="number"
          id="cash"
          value={cash}
          onChange={(e) => setCash(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gold">Gold:</label>
        <input
          type="number"
          id="gold"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="silver">Silver:</label>
        <input
          type="number"
          id="silver"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="liabilities">Liabilities:</label>
        <input
          type="number"
          id="liabilities"
          value={liabilities}
          onChange={(e) => setLiabilities(e.target.value)}
          required
        />
      </div>
      <button onClick={calculateZakat}>Calculate Zakat</button>
      {zakat !== null && (
        <div className="result">
          <h2>Zakat Amount: {zakat}</h2>
        </div>
      )}
    </div>
  );
};

export default ZakatCalculator;