import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '@styles';

const StyledHamburger = styled.button`
  cursor: pointer;
  outline: none;
  display: none;
  ${media.tablet`display: flex;`};
`;

const StyledHamburgerBox = styled.span`
  position: relative;
  width: 24px;
  height: 24px;
`;

const StyledHamburgerInner = styled.span`
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  top: 50%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.tertiary};
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${({ isMenuOpen }) => isMenuOpen ? `0.12s` : `0s`};
  transform: rotate(${({ isMenuOpen }) => isMenuOpen ? `225deg` : `0deg`});
  transition-timing-function: cubic-bezier(
    ${({ isMenuOpen }) => isMenuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    background-color: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
  }
  &:before {
    top: ${({ isMenuOpen }) => isMenuOpen ? `0` : `-10px`};
    opacity: ${({ isMenuOpen }) => isMenuOpen ? 0 : 1};
    transition: ${({ isMenuOpen }) => isMenuOpen ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s' : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
  }
  &:after {
    bottom:${({ isMenuOpen }) => isMenuOpen ? `0` : `-10px`};
    transform: rotate(${({ isMenuOpen }) => isMenuOpen ? `-90deg` : `0`});
    transition: ${({ isMenuOpen }) => isMenuOpen ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s' : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  }
`;

const Hamburger = ({ isMenuOpen, setMenuOpen }) => (
  <StyledHamburger aria-label='Menu' onClick={() => setMenuOpen(!isMenuOpen)}>
    <StyledHamburgerBox>
      <StyledHamburgerInner isMenuOpen={isMenuOpen} />
    </StyledHamburgerBox>
  </StyledHamburger>
);

Hamburger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Hamburger;