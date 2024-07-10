import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ZakatCalculator from './ZakatCalculator';
import HadithOnZakat from './HadithOnZakat';
import PrayerTracker from './PrayerTracker';
import ZakatPaymentForm from './ZakatPaymentForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Zakat Calculator</Link>
          <Link to="/hadith">Hadith on Zakat</Link>
          <Link to="/prayer-tracker">Prayer Tracker</Link>
          <Link to="/zakat-payment">Pay Zakat</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<ZakatCalculator />} />
        <Route path="/hadith" element={<HadithOnZakat />} />
        <Route path="/prayer-tracker" element={<PrayerTracker />} />
        <Route path="/zakat-payment" element={<ZakatPaymentForm />} />
      </Routes>
    </div>
  );
}

export default App;
