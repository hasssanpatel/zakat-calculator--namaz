// src/PrayerTracker.jsx
import React, { useState, useEffect } from 'react';
import './PrayerTracker.css';

const prayers = [
  'Fajr',
  'Dhuhr',
  'Asr',
  'Maghrib',
  'Isha'
];

const PrayerTracker = () => {
  const [prayerStatus, setPrayerStatus] = useState(
    JSON.parse(localStorage.getItem('prayerStatus')) || {
      Fajr: false,
      Dhuhr: false,
      Asr: false,
      Maghrib: false,
      Isha: false,
    }
  );

  useEffect(() => {
    localStorage.setItem('prayerStatus', JSON.stringify(prayerStatus));
  }, [prayerStatus]);

  const handleToggle = (prayer) => {
    setPrayerStatus({
      ...prayerStatus,
      [prayer]: !prayerStatus[prayer]
    });
  };

  return (
    <div className="prayer-tracker">
      <h1>Prayer Tracker</h1>
      <ul>
        {prayers.map((prayer) => (
          <li key={prayer}>
            <label>
              <input
                type="checkbox"
                checked={prayerStatus[prayer]}
                onChange={() => handleToggle(prayer)}
              />
              <span>{prayer}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrayerTracker;
