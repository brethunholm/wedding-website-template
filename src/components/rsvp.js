/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const StyledRsvp = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT:400i|Rubik" rel="stylesheet');

  height: 90vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 0;
  font-family: 'Old Standard TT', Serif;
  position: relative;
  background-size: cover;
  background-image: url('images/floral-background.jpg');

  .center {
    text-align: center;
    border: 1px solid red;
  }

  .rsvp-container {
    height: 90%;
    width: 60%;
    background: white;
    padding: 50px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: grid;
    justify-content: center;
    gap: 20px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

export default function Rsvp() {
  return (
    <StyledRsvp>
      <div className="rsvp-container">
        <p className="center">RSVP</p>
        <h1 className="center">We are so excited to celebrate with you!</h1>
        <h3 className="center">Kindly respond by September 1st 2021</h3>
        <form className="form">
          <input type="text" placeholder="email" />
          <input type="text" placeholder="name" />
          <label>
            Are you attending?
            <input type="text" />
          </label>
          <label>
            Who is joining you?
            <input type="text" />
          </label>
          <label>
            Message:
            <input type="text" />
          </label>
        </form>
      </div>
    </StyledRsvp>
  );
}
