import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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

    fontStyle: {
      routers: string;
      links: string;
      buttons: string;
      titles: string;
      subTitles: string;
      paragraphs: string;
    };
  }
}
