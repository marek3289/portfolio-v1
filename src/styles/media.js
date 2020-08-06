import { css } from 'styled-components';

const breakpoints = {
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  tiny: 330,
};

export const media = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  const emSize = breakpoints[breakpoint] / 16;

  acc[breakpoint] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
