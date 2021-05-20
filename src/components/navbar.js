import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
  color: var(--white);
  box-sizing: border-box;

  .logo {
    height: 3rem;
  }

  .nav-list {
    background: white;
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

  .nav-item span {
    border: none;
    background: none;

    /* text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5); */
    font-size: 0.75rem;
    font-weight: bold;
  }

  .nav-item span:hover {
    color: #bcbdc2;
    transition: all 200ms ease-in;
  }

  .nav-item:first-child {
    margin-right: auto;
    margin-left: 1.3rem;
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
        <li className="nav-item ">
          <img className="logo" src="images/logo.png" alt="" />
        </li>
        <li className="nav-item nav">
          <span>Our Story</span>
        </li>
        <li className="nav-item nav">
          <span>Registry</span>
        </li>
        <li className="nav-item nav">
          <span>RSVP</span>
        </li>
        <li className="nav-item nav">
          <span>Gallery</span>
        </li>
      </ul>
    </StyledNav>
  );
}
