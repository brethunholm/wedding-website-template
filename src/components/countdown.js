import React from 'react';
import styled from 'styled-components';

const StyledCountdown = styled.div`
  height: 30vh;
  width: 100vw;
  padding: 50px;
  /* background: mistyrose; */

  .countdown {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 35px;
  }

  .highlight {
    color: #efe0ca;
  }
`;

export default function Countdown() {
  return (
    <StyledCountdown>
      <div className="countdown">
        <p>
          <span className="highlight">04</span> Months
        </p>
        <p>
          {' '}
          <span className="highlight">22</span> days{' '}
        </p>
        <p>
          {' '}
          <span className="highlight">03</span> Hours
        </p>
      </div>
    </StyledCountdown>
  );
}
