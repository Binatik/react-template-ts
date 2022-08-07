import React, { FC } from 'react';

import { StyledContainer, StyledFlexRow } from '@src/styles/others';
import { StyledRouterLinkSecondary } from '@src/styles/routers';
import { StyledButtonSecondary } from '@src/styles/buttons';

import { StyledHeader, StyledNavigation } from './styles';

const Header: FC = () => {
  const text = 'Информация в разработке';
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <StyledFlexRow isCenter={false}>
            <StyledNavigation>
              <ul>
                <li>
                  <StyledRouterLinkSecondary style={{ marginRight: '10px' }} to="/">
                    Главная
                  </StyledRouterLinkSecondary>
                </li>
                <li>
                  <StyledRouterLinkSecondary to="started">Дополнительная</StyledRouterLinkSecondary>
                </li>
              </ul>
            </StyledNavigation>
            <StyledButtonSecondary onClick={() => alert(text)}>Информация</StyledButtonSecondary>
          </StyledFlexRow>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

export { Header };
