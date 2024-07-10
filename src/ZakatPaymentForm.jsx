// src/ZakatPaymentForm.jsx
import React, { useState } from 'react';
import './ZakatPaymentForm.css';

const ZakatPaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(`You have successfully paid ${amount} as Zakat.`);
    setAmount('');
  };

  return (
    <div className="zakat-payment-form">
      <h1>Zakat Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pay Zakat</button>
      </form>
      {confirmation && <p className="confirmation">{confirmation}</p>}
    </div>
  );
};

export default ZakatPaymentForm;