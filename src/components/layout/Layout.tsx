import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useAppSelector } from '@src/hooks/useAppSelector';

import { Header } from '../UI/header';

interface IStyledMainProps {
  height: number;
}

const Layout: FC = () => {
  const [heightHeader, setHeightHeader] = useState<number>(0);

  console.log(heightHeader);

  const { toggle } = useAppSelector(state => state.burger);

  return (
    <>
      <Wrapper>
        <Header setHeightHeader={setHeightHeader} />
        <Main height={heightHeader}>
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

const Main = styled.main<IStyledMainProps>`
  min-height: 1000px;
  padding-top: ${props => props.height + 10}px;
  background-color: ${props => props.theme.colors.surface};
  flex: 1 1;
`;
