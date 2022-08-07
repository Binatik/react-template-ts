import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useAppSelector } from '@src/hooks/useAppSelector';

import { Header } from '../UI/header';

const Layout: FC = () => {
  const { toggle } = useAppSelector(state => state.burger);

  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Wrapper>
    </>
  );
};

export { Layout };

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: ${props => props.theme.colors.secondary};
  overflow: hidden;
`;

const Main = styled.main`
  padding-top: 10px;
  flex: 1 1;
`;
