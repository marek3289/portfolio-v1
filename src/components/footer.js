import React from 'react';
import styled from 'styled-components';

import { IconLink } from '@components';
import { mixins, media, IconWrapper } from '@styles';
import { socialMedia } from '@config';

const StyledSocialsWrapper = styled.ul`
  ${mixins.flexCenter};
  display: none;

  ${media.tablet`display: flex;`};
`;

const Footer = () => (
  <footer>
    <StyledSocialsWrapper>
      {socialMedia.map(({ name, url }) => (
        <li key={name}>
          <IconWrapper
            href={url}
            aria-label={name}
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            <IconLink name={name} />
          </IconWrapper>
        </li>
      ))}
    </StyledSocialsWrapper>
  </footer>
);

export default Footer;
