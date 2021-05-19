import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
  color: var(--white);
  box-sizing: border-box;
  font-family: 'Roboto', Sans-Serif;

  .nav-list {
    background: white;
    box-shadow: 0px 0px 10px grey;
    margin: 0;
    padding: 1rem 0;
    border-radius: 2px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .nav-item {
    list-style: none;
    margin-right: 0.75rem;
  }

  .nav-item button {
    border: none;
    background: none;
    color: var(--white);
    /* text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5); */
    font-size: 0.75rem;
    font-weight: bold;
  }

  .nav-item button:hover {
    color: #fe6192;
    transition: all 200ms ease-in;
  }

  .nav-item:first-child {
    margin-right: auto;
    margin-left: 1.3rem;
  }

  button:hover {
    color: blue;
  }

  @media (max-width: 600px) {
    .nav-list {
      height: 20px;
    }
    .nav-item {
      opacity: 0;
    }
    .nav-item:first-child {
      opacity: 1;
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <ul className="nav-list nav">
        <li className="nav-item ">🖤</li>
        <li className="nav-item nav">Our Story</li>
        <li className="nav-item nav">Event Details</li>
        <li className="nav-item nav">RSVP</li>
        <li className="nav-item nav">Gallery</li>
      </ul>
    </StyledNav>
  );
}
