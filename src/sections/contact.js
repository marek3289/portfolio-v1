import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Section, Heading, LinkButton, mixins, media } from '@styles';
import { email } from '@config';

const StyledWrapper = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  margin-top: -100px;
  margin-bottom: 100px;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-family: ${({ theme }) => theme.font.family.DMMono};
  margin: 0;

  ::before { font-size: ${({ theme }) => theme.font.size.l}}
  ::after { display: none };
`;

const StyledContent = styled.div`
  ${mixins.content};
  margin: 20px 0 50px;
  width: 50%;
  text-align: center;

  ${media.tablet` width: 75%; `};
`;

const Contact = ({ data }) => {
  const { frontmatter: { title, buttonText }, html } = data[0].node;

  return (
    <StyledWrapper id='contact'>
      <StyledHeading>{title}</StyledHeading>
      <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
      <LinkButton href={`mailto:${email}`}>{buttonText}</LinkButton>
    </StyledWrapper>
  );
};

Contact.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          buttonText: PropTypes.string.isRequired,
        }),
        html: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default Contact;
