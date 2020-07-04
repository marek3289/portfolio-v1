import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DarkModeButton } from '@components';
import { mixins, media } from '@styles';
import { navLinks } from '@config';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.level3};
  display: none;
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transform: translateX(${({ isOpen }) => isOpen ? '0vw' : '100vw'});
  transition: ${({ theme }) => theme.transition};
  ${media.tablet`display: block;`};
`;

const StyledSidebar = styled.aside`
  ${mixins.flexColumn};
  ${mixins.sidePadding};
  background-color: ${({ theme }) => theme.secondary};
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  box-shadow: 0 7.5px 20px -12.5px ${({ theme }) => theme.shadow};
  transition: inherit;
  ${media.phablet`width: 75vw;`};
`;

const StyledNav = styled.nav`
  ${mixins.flexColumn}
  width: 100%;
`;

const StyledList = styled.ol`
  width: inherit;
`;

const StyledListItem = styled.li`
  ${mixins.listItem};
  margin: 0 auto 20px;
  color: ${({ theme }) => theme.tertiary};
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-family: ${({ theme }) => theme.font.family.DMMono};
  ${media.thone`font-size: ${({ theme }) => theme.font.size.xl};`};
  ${media.tiny`font-size: ${({ theme }) => theme.font.size.l};`};
`;

const StyledButtonWrapper = styled.div`
  ${mixins.flexCenter};
  ${mixins.sidePadding};
  position: absolute;
  right: 25px;
  bottom: 0;
  height: 100px;
`;

const Menu = ({ isMenuOpen, setMenuOpen }) => {
  const handleClickOutside = (e) => {
    const isWrapper = e.target.classList[0] && e.target.classList[0].includes('StyledWrapper');

    if (e.target.hasAttribute('href') || isWrapper) {
      setMenuOpen(false);
    }
  };

  return (
    <StyledWrapper isOpen={isMenuOpen} onClick={handleClickOutside}>
      <StyledSidebar>

        <StyledNav>
          <StyledList>
            {navLinks.map(({ name, url }) => (
              <StyledListItem key={name}>
                <Link to={url}>{name}</Link>
              </StyledListItem>
            ))}
          </StyledList>
        </StyledNav>

        <StyledButtonWrapper>
          <DarkModeButton />
        </StyledButtonWrapper>

      </StyledSidebar>
    </StyledWrapper>
  )
};

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Menu;