import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Section, LinkButton, media, mixins } from '@styles';
import { email } from '@config';

const StyledWrapper = styled(Section)`
  ${mixins.flexColumn};
  justify-content: flex-start;

  min-height: calc(100vh - 150px);
  text-align: center;

  ${media.thone`
    align-items: flex-start;
    text-align: start;
    justify-content: center;
    margin-top: -15%;
  `};

  a + a { margin-left: 25px };
`;

const StyledHeading = styled.h1`
  font-size: 7.2rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.tertiary};
  opacity: 0.8;
  margin: -10px 0 30px -5px;

  ${media.thone`
    font-size: 5.6rem;
    margin: -10px 0 0 -5px;
  `};

  ${media.phablet`font-size: 4.6rem;`};
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.blue};

  ${media.thone`font-size: ${({ theme }) => theme.font.size.xl};`};
`;

const StyledDescription = styled.div`
  ${mixins.content};
  width: 75%;
  margin: 25px 0 50px;

  ${media.thone`font-size: ${({ theme }) => theme.font.size.m};`};
`;

const StyledButtons = styled.div`
  display: flex;
`;

const Hero = ({ data }) => {
  const { frontmatter: { title, subtitle, buttonContact, buttonResume }, html } = data[0].node;

  const wrapper = document.querySelector('section')
  console.log(wrapper)

  return (
    <StyledWrapper>
      <StyledParagraph>{subtitle}</StyledParagraph>
      <StyledHeading>{title}</StyledHeading>
      <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
      <StyledButtons>
        <LinkButton href={`mailto:${email}`}>{buttonContact}</LinkButton>
        <LinkButton secondary href='/resume.pdf' target='_blank' rel='nofollow noopener noreferrer'>{buttonResume}</LinkButton>
      </StyledButtons>
    </StyledWrapper>
  );
};

Hero.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          subtitle: PropTypes.string.isRequired,
          buttonContact: PropTypes.string.isRequired,
          buttonResume: PropTypes.string.isRequired,
        }),
        html: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default Hero;
