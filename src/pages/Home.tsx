import React, { FC } from 'react';

import { StyledParagraphSecondary } from '@src/styles/texts';
import { StyledContainer } from '@src/styles/others';

const Home: FC = () => {
  return (
    <>
      <StyledContainer>
        <StyledParagraphSecondary>Главная страница</StyledParagraphSecondary>
        <StyledParagraphSecondary>Home page</StyledParagraphSecondary>
      </StyledContainer>
    </>
  );
};

export { Home };
