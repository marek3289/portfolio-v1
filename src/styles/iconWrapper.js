import styled from 'styled-components';

import { mixins } from '@styles';

const IconWrapper = styled.a`
  ${mixins.transitionedLink};
  padding: 10px;
  display: block;

  svg {
    color: inherit;
    width: 20px;
    height: 20px;
  }
`;

export default IconWrapper;