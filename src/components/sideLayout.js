import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { media } from '@styles';
import { useMounted } from '@hooks';

const StyledWrapper = styled.div`
  position: fixed;
  top: 35%;
  left: ${({ orientation }) => orientation === 'left' ? '40px' : 'auto'};
  right: ${({ orientation }) => orientation === 'left' ? 'auto' : '40px'};
  width: 40px;

  ${media.tablet`display: none;`};
`;

const SideLayout = ({ children, orientation }) => {
  const { isMounted } = useMounted(2500); 
    
  return (
    <StyledWrapper orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames='fadein' timeout={2000}>
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledWrapper>
  )
};

SideLayout.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string.isRequired,
};

export default SideLayout;
