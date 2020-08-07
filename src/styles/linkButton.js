import styled from 'styled-components';

import { media } from '@styles';

const LinkButton = styled.a`
  color: ${({ theme }) => theme.tertiary};
  padding: 15px 20px;
  border: 1px solid ${({ theme }) => theme.blue};
  background-color: ${({ theme, secondary }) => secondary ? theme.blue : theme.main};
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme, secondary }) => secondary ? theme.tertiary : theme.blue};
  cursor: pointer;

  :hover { opacity: 0.8 };

  ${media.thone`
    font-size: ${({ theme }) => theme.font.size.xs};
    padding: 10px;
  `};
`;

export default LinkButton;
