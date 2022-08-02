import React, { FC, useState, useEffect } from 'react';

import { Container } from '@src/store/styled/components/other';

interface IErrorPage {
  code: number;
}

const ErrorPage: FC<IErrorPage> = ({ code }) => {
  const [information, setInformation] = useState('');

  useEffect(() => {
    if (code === 404) {
      setInformation('Страницы нет');
    }
  }, [information]);

  return (
    <>
      <Container>
        <h2>{information}</h2>
      </Container>
    </>
  );
};

export { ErrorPage };
