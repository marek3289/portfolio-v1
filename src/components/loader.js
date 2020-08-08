import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gsap } from 'gsap';

import { mixins } from '@styles';
import { BigLogoSVG as Logo } from '@assets';

const StyledWrapper = styled.div`
  ${mixins.flexCenter};
  z-index: ${({ theme }) => theme.zIndex.level5};
  position: fixed;
  width: 100%;
  height: 100%;
`;

const StyledLogo = styled(Logo)`
  color: ${({ theme }) => theme.tertiary};
  opacity: 0;
`;

const Loader = ({ handleLoadingEnd }) => {
  const logoWrapper = useRef(null);

  useEffect(() => {
    const [logo] = logoWrapper.current.children;

    const firstNameInitial = logo.getElementById('firstNameInitial');
    const lastNameInitial = logo.getElementById('lastNameInitial');

    gsap.set(logo, { rotate: 90, autoAlpha: 0 });
    gsap.set(firstNameInitial, { rotate: 180, transformOrigin: 'center', y: '+=15'});
    gsap.set(lastNameInitial, { y: '-=15'});

    const tl = gsap.timeline({ onComplete: handleLoadingEnd })
    tl.to(logo, { duration: 1, opacity: 1, autoAlpha: 1 }, '+=0.5');
    tl.to(logo, { duration: 0.6, rotate: 0 });
    tl.to(firstNameInitial, { duration: 0.6, rotate: 360, y: '0' }, '-=0.6');
    tl.to(lastNameInitial, { duration: 0.6, y: '0' }, '-=0.6');
    tl.to(logo, { duration: 0.4, scale: 0 }, '+=0.5');
  });

  return (
    <StyledWrapper ref={logoWrapper}>
      <StyledLogo />
    </StyledWrapper>
  )
};

Loader.propTypes = {
  handleLoadingEnd: PropTypes.func.isRequired,
}

export default Loader;
