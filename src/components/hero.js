import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT:400i|Rubik" rel="stylesheet');
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
    background: rgba(0, 0, 0, 0.65);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .overlay h1 {
    font-family: 'Old Standard TT', Serif;
    font-weight: normal;
    font-size: 50px;
    transform: translateY(200px);
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
