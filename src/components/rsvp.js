import React from 'react';
import styled from 'styled-components';

const StyledRsvp = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT:400i|Rubik" rel="stylesheet');

  display: grid;
  justify-content: center;

  .background {
    height: 90vh;
    width: 1200px;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url('images/floral-background.jpg');
    background-position: top;
  }

  .form {
    height: 90%;
    width: 1000px;
    background: white;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export default function Rsvp() {
  return (
    <StyledRsvp>
      <div className="background">
        <div className="form">
          <span>RSVP</span>
          <h1>Are you attending?</h1>
          <form className="form">
            <input type="checkbox" />
            <input type="checkbox" />
          </form>
        </div>
      </div>
    </StyledRsvp>
  );
}
