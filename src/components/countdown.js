import React from 'react';
import './Countdown.css';

export default function Countdown() {
  return (
    <div className="countdown-container">
      <div className="countdown">
        <div className="months num">
          <p className="monthsAmount highlight">04</p>
          <p className="monthsName unit">Months</p>
        </div>
        <div className="days num">
          <p className="daysAmount highlight">22</p>
          <p className="daysName unit">Days</p>
        </div>
        <div className="hours num">
          <p className="hoursAmount highlight">03</p>
          <p className="hoursName unit">Hours</p>
        </div>
      </div>
    </div>
  );
}
