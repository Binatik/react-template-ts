import React, { FC, useState, useEffect } from 'react';

import { StyledContainer } from '@src/styles/others';

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
      <StyledContainer>
        <h2>{information}</h2>
      </StyledContainer>
    </>
  );
};

export { ErrorPage };
