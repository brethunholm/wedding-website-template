import React from 'react';
import './countdown.css';

export default function Countdown() {
  return (
    <div className="countdown">
      <p>
        <span className="highlight">04</span> Months
      </p>
      <p>
        {' '}
        <span className="highlight">22</span> Days
      </p>
      <p>
        {' '}
        <span className="highlight">03</span> Hours
      </p>
    </div>
  );
}
