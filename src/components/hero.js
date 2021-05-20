import React from 'react';
// import './Hero.css';
import styled from 'styled-components';

const StyledHero = styled.div`
  .bg-image {
    height: 90vh;
    width: 100vw;
    position: relative;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url('images/hero-black-white.jpg');
    background-position: top;
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.35);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .overlay h1 {
    font-family: 'Old Standard TT', Serif;
    font-weight: normal;
    font-size: 4rem;
    transform: translateY(200px);
  }

  @media (max-width: 900px) {
    .bg-image {
      height: 30vh;
    }
    .overlay {
      height: 30vh;
    }
    .overlay h1 {
      font-size: 1.5rem;
      transform: translateY(70px);
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <div className="bg-image">
        <div className="overlay">
          <h1>DANI & ETHAN</h1>
        </div>
      </div>
    </StyledHero>
  );
}
