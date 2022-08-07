import { breakpoints } from './breakpoints';
import { fontStyle } from './fontStyle';

export const theme = {
  colors: {
    primary: '#fff',
    secondary: '#20212a',
    surface: '#fe900d',

    other: {
      primary: '#374d5e',
      secondary: '#00e600',
    },
  },

  grid: {
    col3: '33.333%',
    col2: '50%',
    col1: '100%',
  },

  desktopFirst: {
    tablet: `(max-width: ${breakpoints.medium}px)`,
    desktop: `(max-width: ${breakpoints.large}px)`,
  },

  fontStyle,
};
