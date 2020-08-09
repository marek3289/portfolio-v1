import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Section, LinkButton, media, mixins } from '@styles';
import { useMounted } from '@hooks';
import { email, heroDelay } from '@config';

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
  margin: -10px 0 30px -5px;

  ${media.thone`
    font-size: 5.4rem;
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
  const { isMounted } = useMounted(heroDelay); 

  const { frontmatter: { title, subtitle, buttonContact, buttonResume }, html } = data[0].node;

  const paragraph = () => <StyledParagraph style={{ transitionDelay: '100ms' }}>{subtitle}</StyledParagraph>;

  const heading = () => <StyledHeading style={{ transitionDelay: '300ms' }}>{title}</StyledHeading>;
  
  const description = () => (
    <StyledDescription style={{ transitionDelay: '500ms' }} dangerouslySetInnerHTML={{ __html: html }} />
  );

  const buttons = () => (
    <StyledButtons style={{ transitionDelay: '700ms' }}>
      <LinkButton href={`mailto:${email}`}>{buttonContact}</LinkButton>
      <LinkButton secondary href='/resume.pdf' target='_blank' rel='nofollow noopener noreferrer'>{buttonResume}</LinkButton>
    </StyledButtons>
  );

  const items = [paragraph, heading, description, buttons];

  return (
    <StyledWrapper>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={2000}>
              {item}
            </CSSTransition>
          ))
        }
      </TransitionGroup>
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
