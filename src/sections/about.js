import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mixins, media, Section, Heading } from '@styles';
import { DeveloperSVG } from '@assets';

const StyledFlex = styled.div`
  ${mixins.flexBetween};
  ${media.bigDesktop` & > div { margin-right: 20px } `};
`;

const StyledContent = styled.div`
  width: 60%;
  max-width: 500px;
  text-align: justify;
  color: ${({ theme }) => theme.tertiary};

  ${media.tablet`width: 100%;;`};
`;

const StyledDeveloper = styled(DeveloperSVG)`
  width: 40%;
  height: auto;
  right: 0;

  ${media.tablet`display: none;`};
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme.font.size.m};
  padding: 3px 0 0 15px;
  position: relative;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    font-size: ${({ theme }) => theme.font.size.xxxl};
    color: ${({ theme }) => theme.blue};
    line-height: 1.7rem;
  }
`;

const About = ({ data }) => {
  const { frontmatter: { title, skills }, html } = data[0].node;

  return (
    <Section id='about'>
      <Heading>{title}</Heading>
      <StyledFlex>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <StyledList>
            {skills.map((skill) => (
              <StyledListItem key={skill}>{skill}</StyledListItem>
            ))}
          </StyledList>
        </StyledContent>
        <StyledDeveloper />
      </StyledFlex>
    </Section>
  );
};

About.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          skills: PropTypes.array.isRequired,
        }),
        html: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default About;
