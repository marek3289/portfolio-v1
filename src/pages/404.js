import React from 'react';
import styled from 'styled-components';

import { Layout, SEO } from '@components';
import { mixins } from '@styles';

const StyledWrapper = styled.div`
  ${mixins.padding};

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledWrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <button>Home</button>
    </StyledWrapper>
  </Layout>
)

export default NotFoundPage;
