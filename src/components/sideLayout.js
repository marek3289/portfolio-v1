import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from '@styles';

const StyledWrapper = styled.div`
  position: fixed;
  top: 35%;
  left: ${({ orientation }) => orientation === 'left' ? '40px' : 'auto'};
  right: ${({ orientation }) => orientation === 'left' ? 'auto' : '40px'};
  width: 40px;

  ${media.tablet`display: none;`};
`;

const SideLayout = ({ children, orientation }) => (
  <StyledWrapper orientation={orientation}>
    {children}
  </StyledWrapper>
);

SideLayout.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string.isRequired,
};

export default SideLayout;