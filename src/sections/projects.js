import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from 'styled-components';

import { IconLink } from '@components';
import { Section, Heading, mixins, media } from '@styles';

const StyledProjectWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 25px;
  margin-bottom: 75px;

  a + a { padding: 20px; }
  &:last-child { margin: 0; }
`;

const StyledContent = styled.div`
  grid-column: 1 / 7;
  grid-row: 1;

  ${media.tablet`
    grid-column: 1 / -1;
    grid-row: 1 / 3;
  `};
`;

const StyledAdditionalContent = styled.div`
  grid-column:  1 / -1;
  grid-row: 1 / 12;
  ${media.tablet`grid-row: 4 / 5;`}
`;

const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.tertiary};
`;

const StyledDescription = styled.div`
  ${mixins.content};
  font-size: ${({ theme }) => theme.font.size.m};
  opacity: 1;
  box-shadow: ${({ theme }) => `0 7.5px 20px -12.5px ${theme.shadow}`};
  padding: 20px;
  background-color: ${({ theme }) => theme.quaternary};
  z-index: ${({ theme }) => theme.zIndex.level2};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;

  ${media.tablet`
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  `};
`;

const StyledLink = styled.a`
  ${mixins.transitionedLink};

  svg {
    color: inherit;
    width: 20px;
    height: 20px;
  }
`;

const StyledTechWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;

  li {
    color: ${({ theme }) => theme.tertiary};
    font-family: ${({ theme }) => theme.font.family.DMMono};
    font-size: ${({ theme }) => theme.font.size.s};
    opacity: 0.6;
  }
  li + li { margin-left: 10px };
`;

const StyledImgWrapper = styled.a`
  grid-column: 6 / -1;
  grid-row: 1 / 5;
  opacity: 0.9;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${media.tablet`
    grid-column:  1 / -1;
    grid-row: 3 / 3;
  `};

  img { border-radius: ${({ theme }) => theme.borderRadius}; }
`;

const Projects = ({ data }) => (
  <Section id='projects'>
    <Heading>Featured Projects</Heading>
    <div>
      {data.map((project) => {
        const { html, frontmatter } = project.node;
        const { title, technologies, github, external, featuredImage } = frontmatter;

        return (
          <StyledProjectWrapper key={title}>

            <StyledContent>
              <StyledTitle>{title}</StyledTitle>
              <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
            </StyledContent>

            <StyledAdditionalContent>
              <StyledTechWrapper>
                {technologies && technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </StyledTechWrapper>
              <StyledLink href={github} aria-label='Github' target='_blank' rel='nofollow noopener noreferrer'>
                <IconLink name='Github' />
              </StyledLink>
              <StyledLink href={external} aria-label='Project Website' target='_blank' rel='nofollow noopener noreferrer'>
                <IconLink name='External' />
              </StyledLink>
            </StyledAdditionalContent>

            <StyledImgWrapper href={external} aria-label='Project Image' target='_blank' rel='nofollow noopener noreferrer'>
              <Image fluid={featuredImage.childImageSharp.fluid} alt={title} />
            </StyledImgWrapper>

          </StyledProjectWrapper>
        );
      })}
    </div>
  </Section>
);

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
          github: PropTypes.string.isRequired,
          external: PropTypes.string.isRequired,
          featuredImage: PropTypes.object.isRequired,
        }),
        html: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default Projects;