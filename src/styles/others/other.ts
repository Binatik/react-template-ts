import styled from 'styled-components';
import { IPropsFlex } from './types';

export const StyledContainer = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const StyledBurgerLine = styled.path`
  fill: ${props => props.theme.colors.primary};
  transform-origin: 50%;
  transition: transform 400ms;
  stroke: ${props => props.theme.colors.primary};
  stroke-width: 2;
`;

export const StyledFlexRow = styled.div<IPropsFlex>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.isCenter ? 'center' : 'flex-start')};
`;

export const StyledFlexCol = styled.div<IPropsFlex>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: ${props => (props.isCenter ? 'center' : 'flex-start')};
`;
