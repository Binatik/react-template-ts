import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin: 30px 0;
  background-color: ${props => props.theme.colors.secondary};
`;

export const StyledNavigation = styled.nav`
  margin: 10px 0;
  display: flex;
  flex: 1 1 auto;
`;
