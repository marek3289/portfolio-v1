import React, { useContext } from 'react';
import styled from 'styled-components';

import { mixins } from '@styles';
import { MoonIcon, SunIcon } from '@assets';
import DarkModeContext from '@context/DarkModeContext';

const StyledCheckbox = styled.input`
  position: absolute;
  height: 28px;
  width: 56px;
  opacity: 0;
  z-index: 10;
  cursor: pointer;
  &:checked + label div { transform: translateX(26px)}
`;

const StyledLabel = styled.label`
  ${mixins.flexBetween};
  position: relative;
  height: 28px;
  width: 56px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.tertiary};
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 50px;

  svg { 
    position: absolute;
    color: ${({ theme }) => theme.tertiary};
    width: 14px;
    height: 14px;
    transition: ${({ theme }) => theme.transition};

    :nth-of-type(1) {
      opacity: ${({ dark }) => dark ? 1 : 0};
      left: 8px;
    };

    :nth-of-type(2){
      opacity: ${({ dark }) => dark ? 0 : 1};
      right: 8px;
    };
  };
`;

const StyledBall = styled.div`
  position: absolute;
  height: 18px;
  width: 18px;
  transition: ${({ theme }) => theme.transition};
  background-color: ${({ theme }) => theme.tertiary};
  border-radius: 50%;
`;

const DarkModeButton = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <>
      <StyledCheckbox aria-label='Toggle Dark Mode' type="checkbox" checked={darkMode} onChange={toggleTheme} />
      <StyledLabel dark={darkMode}>
        <SunIcon />
        <MoonIcon />
        <StyledBall />
      </StyledLabel>
    </>
  );
};

export default DarkModeButton;