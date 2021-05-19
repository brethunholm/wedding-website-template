import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  .bg-image {
    height: 100vh;
    width: 100vw;
    position: relative;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url('images/hero.jpg');
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.65);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <div className="bg-image">
        <div className="overlay">
          <h1>Dani & Ethan</h1>
        </div>
      </div>
    </StyledHero>
  );
}
