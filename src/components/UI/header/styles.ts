import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  padding: 10px 0;
  background-color: ${props => props.theme.colors.secondary};
`;

export const StyledItem = styled.li`
  &:last-child {
    margin: 0;
  }
`;

export const StyledNavigation = styled.nav`
  margin: 20px 0;
  display: flex;
`;
