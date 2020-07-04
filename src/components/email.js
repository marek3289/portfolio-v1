import React from 'react';
import styled from 'styled-components';

import { SideLayout } from '@components';
import { email } from '@config';
import { mixins } from '@styles';

const StyledWrapper = styled.div`
  ${mixins.flexColumn};
`;

const StyledLink = styled.a`
  ${mixins.transitionedLink};
  writing-mode: vertical-lr;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 1.5px;
`;

const Email = () => (
  <SideLayout orientation='right'>
    <StyledWrapper>
      <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
    </StyledWrapper>
  </SideLayout>
);

export default Email;
