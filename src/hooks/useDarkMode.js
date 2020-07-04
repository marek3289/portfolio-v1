import { useLocalStorage } from '@hooks';

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

  const enabled = typeof enabledState !== 'undefined' ? enabledState : false;

  return [enabled, setEnabledState];
};

export default useDarkMode;