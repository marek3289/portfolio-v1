import React from 'react';
import styled from 'styled-components';

import { SideLayout, IconLink } from '@components';
import { socialMedia } from '@config';
import { mixins, IconWrapper } from '@styles';

const StyledWrapper = styled.ul`
  ${mixins.flexColumn};

  li:last-of-type {
    margin-bottom: 20px;
  }
`;

const Socials = () => (
  <SideLayout orientation='left'>
    <StyledWrapper>
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
    </StyledWrapper>
  </SideLayout>
);

export default Socials;