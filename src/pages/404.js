import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Layout, SEO } from '@components';
import { Section, LinkButton, mixins, media } from '@styles';

const StyledWrapper = styled(Section)`
  ${mixins.padding};
  ${mixins.flexColumn};
  height: 100vh;

  * { margin: -10px 0 50px };
  ${media.thone`
    align-items: flex-start;
    text-align: start;
  `};
`;

const StyledHeading = styled.h1`
  font-size: 4.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.tertiary};
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.blue};
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <StyledWrapper>
      <StyledHeading>Oops!</StyledHeading>
      <StyledParagraph>Seems you hit a route that doesn&#39;t exist... the sadness.</StyledParagraph>
      <LinkButton as={Link} to='/'>Go Home</LinkButton>
    </StyledWrapper>
  </Layout>
);

export default NotFoundPage;
