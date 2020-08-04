import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { Layout } from '@components';
import { Hero, About, Projects, Contact } from '@sections';
import { mixins, media } from '@styles';

const StyledMainWrapper = styled.main`
  ${mixins.padding};
  width: 100%;
  padding-top: 150px;
  counter-reset: section;
  section + section { padding: 150px 0; };

  ${media.desktop`padding-top: 150px;`};
  ${media.tablet`padding-top: 150px;`};
  ${media.phablet`padding-top: 125px;`};
`;

const IndexPage = ({ data }) => (
  <Layout>
    <StyledMainWrapper>
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Projects data={data.projects.edges} />
      <Contact data={data.contact.edges} />
    </StyledMainWrapper>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.shape({ edges: PropTypes.array.isRequired }),
    about: PropTypes.shape({ edges: PropTypes.array.isRequired }),
    projects: PropTypes.shape({ edges: PropTypes.array.isRequired }),
    contact: PropTypes.shape({ edges: PropTypes.array.isRequired }),
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  {
    hero: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
      edges {
        node {
          frontmatter {
            title
            buttonResume
            buttonContact
            subtitle
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about/"}}) {
      edges {
        node {
          frontmatter {
            title
            skills
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: frontmatter___date, order: ASC}) {
      edges {
        node {
          frontmatter {
            title
            date
            github
            external
            technologies
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
      edges {
        node {
          frontmatter {
            title
            buttonText
          }
          html
        }
      }
    }
  }
`;