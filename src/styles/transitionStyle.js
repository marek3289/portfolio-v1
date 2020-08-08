import { css } from 'styled-components';
import { lightTheme as theme } from './theme';

const TransitionStyles = css`
  .fadeup-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity ${theme.fadeEffect}, transform ${theme.fadeEffect};
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity ${theme.fadeEffect}, transform ${theme.fadeEffect};
  }
  .fadedown-enter {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity ${theme.fadeEffect}, transform ${theme.fadeEffect};
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity ${theme.fadeEffect}, transform 300ms ${theme.fadeEffect};
  }
  .fadein-enter {
    opacity: 0;
    transition: opacity 750ms ease-out;
  }
  .fadein-enter-active {
    opacity: 1;
    transition: opacity 750ms ease-out;
  } 
`;

export default TransitionStyles;
