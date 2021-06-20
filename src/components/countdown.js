import React from 'react';
import './countdown.css';

export default function Countdown() {
  return (
    <div className="countdown">
      <p>
        <span className="highlight">04</span> MONTHS
      </p>
      <hr />
      <p>
        <span className="highlight">22</span> DAYS
      </p>
      <hr />
      <p>
        <span className="highlight">03</span> HOURS
      </p>
    </div>
  );
}
