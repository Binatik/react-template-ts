import { breakpoints } from "./breakpoints";
import { fontStyle } from "./fontStyle";

interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    surface: string;
    other: {
      primary: string;
      secondary: string;
    };
  };

  grid: {
    col1: string;
    col2: string;
    col3: string;
  };

  desktopFirst: {
    tablet: string;
    desktop: string;
  };

  fontStyle: object;
}

export const theme: ITheme = {
  colors: {
    primary: "#fff",
    secondary: "#90a4b4",
    surface: "#aa8270",

    other: {
      primary: "#374d5e",
      secondary: "#00e600",
    },
  },

  grid: {
    col3: "33.333%",
    col2: "50%",
    col1: "100%",
  },

  desktopFirst: {
    tablet: `(max-width: ${breakpoints.medium}px)`,
    desktop: `(max-width: ${breakpoints.large}px)`,
  },

  fontStyle,
};
