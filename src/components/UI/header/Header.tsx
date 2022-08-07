import React, { FC, useRef, useEffect } from 'react';

import { StyledContainer } from '@src/styles/others';
import { StyledFlexRow, StyledFlexListRow } from '@src/styles/grid';
import { StyledRouterLinkPrimary } from '@src/styles/routers';
import { StyledButtonSecondary } from '@src/styles/buttons';

import { StyledHeader, StyledItem, StyledNavigation } from './styles';

import { IHeader } from './types';

const Header: FC<IHeader> = ({ setHeightHeader }) => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const { current: selectorHeader } = headerRef;
    setHeightHeader(selectorHeader.getBoundingClientRect().bottom);
  }, []);

  const text = 'Информация в разработке';
  return (
    <>
      <StyledHeader ref={headerRef}>
        <StyledContainer>
          <StyledFlexRow content="space-between">
            <StyledButtonSecondary
              style={{ marginRight: '30px' }}
              type="button"
              onClick={() => alert(text)}>
              Информация
            </StyledButtonSecondary>
            <StyledNavigation>
              <StyledFlexListRow style={{ textTransform: 'uppercase' }} content="flex-start">
                <StyledItem>
                  <StyledRouterLinkPrimary to="/">Главная</StyledRouterLinkPrimary>
                </StyledItem>
                <StyledItem>
                  <StyledRouterLinkPrimary to="started">Дополнительная</StyledRouterLinkPrimary>
                </StyledItem>
              </StyledFlexListRow>
            </StyledNavigation>
          </StyledFlexRow>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

export { Header };
