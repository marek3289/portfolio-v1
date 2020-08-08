const colors = {
  dark100: 'hsl(0, 0%, 10%)',
  dark200: 'hsl(0, 0%, 8%)',
  dark300: 'hsl(0, 0%, 20%)',

  light100: 'hsl(0, 0%, 94%)',
  light200: 'hsl(0, 0%, 96%)',
  light300: 'hsl(0, 0%, 85%)',

  white: 'hsl(0, 0%, 80%)',
  black: 'hsl(0, 0%, 0%)',
  blue: 'hsl(206, 79%, 51%)',
};

const heroTheme = {
  dark: {
    main: colors.dark100,
    secondary: colors.dark200,
    tertiary: colors.white,
    quaternary: colors.dark300,
    shadow: colors.black,
  },
  light: {
    main: colors.light100,
    secondary: colors.light200,
    tertiary: colors.black,
    quaternary: colors.light300,
    shadow: colors.white,
  },
};

const theme = {
  ...colors,
  font: {
    family: {
      Montserrat: 'Montserrat, sans-serif',
      DMMono: 'DM Mono, monospace',
    },
    weight: {
      regular: '400',
      semibold: '500',
      bold: '700',
    },
    size: {
      xs: '1.2rem',
      s: '1.3rem',
      m: '1.4rem',
      l: '1.6rem',
      xl: '1.8rem',
      xxl: '2.0rem',
      xxxl: '2.6rem',
    },
  },
  zIndex: {
    level1: '10',
    level2: '20',
    level3: '30',
    level4: '40',
    level5: '50',
  },

  transition: 'all 0.25s ease-in-out',
  borderRadius: '3px',
  fadeEffect: '300ms ease-out',
};

export const lightTheme = { ...theme, ...heroTheme.light };
export const darkTheme = { ...theme, ...heroTheme.dark };
