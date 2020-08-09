import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Menu, Hamburger, DarkModeButton } from '@components';
import { mixins, media } from '@styles';
import { useScroll, useMounted } from '@hooks';
import { navLinks, headerDelay } from '@config';
import { LogoSVG } from '@assets';

const StyledWrapper = styled.header`
  ${mixins.flexBetween};
  padding: 0 50px;
  width: 100%;
  height: ${({ scrollTo }) => scrollTo === 'none' ? '100px' : '70px'};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.level3};
  transform: translateY(${({ scrollTo }) => scrollTo === 'down' ? '-70px' : '0px'});
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ scrollTo, theme }) => scrollTo === 'up' && `0 7.5px 20px -12.5px ${theme.shadow}`};
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.tertiary};
  ${media.phablet`padding: 0 25px;`};
`;

const StyledNav = styled.nav`
  ${mixins.flexBetween};
  width: inherit;
  counter-reset: li 0;
  z-index: ${({ theme }) => theme.zIndex.level4};
`;

const StyledListWrapper = styled.div`
  ${mixins.flexCenter};
  font-family: ${({ theme }) => theme.font.family.DMMono};
  ${media.tablet`display: none;`};
`;

const StyledLogo = styled(LogoSVG)`
  height: 40px;
  width: auto;
  color: ${({ theme }) => theme.tertiary};
`;

const StyledList = styled.ol`
  ${mixins.flexBetween};
`;

const StyledListItem = styled.li`
  ${mixins.listItem};
  color: ${({ theme }) => theme.tertiary};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin: 0 25px;
  ${media.desktop`margin: 0 15px;`};
`;

const StyledButton = styled.div`
  margin-left: 50px;
  ${media.desktop`margin-left: 35px;`};
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { scrollDirection } = useScroll();
  const { isMounted } = useMounted(headerDelay); 

  const handleResize = () => {
    if (window.innerWidth > 768 && isMenuOpen) setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', () => handleResize());
    return () => window.removeEventListener('resize', () => handleResize());
  }, [isMenuOpen]);

  return (
    <StyledWrapper scrollTo={scrollDirection}>
      <Helmet>
        <body className={isMenuOpen ? 'blocked' : ''} />
      </Helmet>
      <StyledNav>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames='fadein' timeout={2000}>
              <Link to='/'>
                <StyledLogo />
              </Link>
            </CSSTransition>
            )}
        </TransitionGroup>

        <StyledListWrapper>
          <StyledList>
            <TransitionGroup component={null}>
              {isMounted && (
                navLinks.map(({ name, url }, i) => (
                  <CSSTransition key={name} classNames='fadedown' timeout={2000}>
                    <StyledListItem style={{ transitionDelay: `${i * 150}ms` }}>
                      <Link to={url}>{name}</Link>
                    </StyledListItem>
                  </CSSTransition>
                ))
              )}
            </TransitionGroup>
          </StyledList>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition key={name} classNames='fadedown' timeout={2000}>
                <StyledButton style={{ transitionDelay: `${(navLinks.length + 1) * 150}ms` }}>
                  <DarkModeButton />
                </StyledButton>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledListWrapper>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames='fadein' timeout={2000}>
              <Hamburger isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            </CSSTransition>
          )}
        </TransitionGroup>

      </StyledNav>

      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </StyledWrapper>
  );
};

export default Header;
