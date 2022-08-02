import React, { FC } from 'react';

import { SecondaryParagraph } from '@src/store/styled/components/texts';
import { Container } from '@src/store/styled/components/other';

const Home: FC = () => {
  return (
    <>
      <Container>
        <SecondaryParagraph>Главная страница</SecondaryParagraph>
        <SecondaryParagraph>Home page</SecondaryParagraph>
      </Container>
    </>
  );
};

export { Home };
