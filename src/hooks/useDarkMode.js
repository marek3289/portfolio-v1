import { useLocalStorage, useMedia } from '@hooks';

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

  const prefersDarkMode = useMedia(
    ['(prefers-color-scheme: dark)'],
    [true],
    false,
  );

  const enabled = typeof enabledState !== 'undefined' ? enabledState : false;

  return [enabled, setEnabledState];
};

export default useDarkMode;