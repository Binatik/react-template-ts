import styled from 'styled-components';

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
