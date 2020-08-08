import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import DarkModeContext from '@context/DarkModeContext';
import { Header, Footer, SEO, Socials, Email, Loader } from '@components';
import { GlobalStyle } from '@styles';
import { lightTheme, darkTheme } from '@styles/theme';
import { useDarkMode } from '@hooks';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
  display: flex;
  flex-direction: column;
`;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
  const data = useStaticQuery(query);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode: darkModeEnabled,
        toggleTheme: () => setDarkModeEnabled(!darkModeEnabled),
      }}
    >
      <ThemeProvider theme={darkModeEnabled ? darkTheme : lightTheme}>
        <SEO metadata={data} />
        <GlobalStyle />

        {isLoading ? (
          <Loader handleLoadingEnd={() => setIsLoading(false)} />
        ) : (
          <StyledWrapper>
            <Header />

            <Socials />
            <Email />

            <div>
              {children}
              <Footer />
            </div>

          </StyledWrapper>
        )}

      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
