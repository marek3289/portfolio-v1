import { css } from 'styled-components';
import { media } from './media';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexColumn: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  padding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,
  listItem: css`
    counter-increment: li 1;
    transition: ${({ theme }) => theme.transition};
    &:hover, &:focus {
      color: ${({ theme }) => theme.blue};
    }

    &:before {
      content: '0' counter(li) '.';
      padding: 10px;
      text-align: right;
      font-size: ${({ theme }) => theme.font.size.xs};
      color: ${({ theme }) => theme.blue};
    }
  `,
  transitionedLink: css`
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.tertiary};
    &:hover, &:focus {
      transform: translateY(-3px);
      color: ${({ theme }) => theme.blue};
    }
  `,
  content: css`
    color: ${({ theme }) => theme.tertiary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.l};
    opacity: 0.6;
  `,
};

export default mixins;