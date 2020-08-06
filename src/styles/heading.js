import styled from 'styled-components';

import { media } from './media';

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xxxl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.tertiary};
  position: relative;
  margin-bottom: 35px;

  &::before {
    counter-increment: section;
    content: '0' counter(section) '.';
    font-size: ${({ theme }) => theme.font.size.xxl};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    font-family: ${({ theme }) => theme.font.family.DMMono};
    color: ${({ theme }) => theme.blue};
    margin-right: 8px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    top: 50%;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.tertiary};
    opacity: 0.2;
    ${media.thone`display: none;`};
  }
`;

export default Heading;
