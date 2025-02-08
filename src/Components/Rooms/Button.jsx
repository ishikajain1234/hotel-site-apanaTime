import React from 'react';
import styled from 'styled-components';

const Button = ({ text }) => {
  return (
    <StyledWrapper>
      <button className="button">
        <span>{text}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center the button */
  align-items: center;

  .button {
    position: relative;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    padding: 10px 20px; /* Smaller size */
    border-radius: 8px;
    font-size: 1em; /* Adjust font size */
    cursor: pointer;
  }

  .button span {
    position: relative;
    z-index: 1;
  }

  .button::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: #272727;
    border-radius: 7px;
    transition: 0.5s;
  }

  .button:hover::before {
    opacity: 0.7;
  }

  .button::after {
    content: "";
    position: absolute;
    inset: 0px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border-radius: 7px;
    transition: 0.5s;
    opacity: 0;
    filter: blur(15px);
  }

  .button:hover:after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center; /* Centering for mobile */
    .button {
      padding: 8px 16px; /* Smaller padding for mobile */
      font-size: 0.9em; /* Smaller text */
    }
  }
`;

export default Button;
