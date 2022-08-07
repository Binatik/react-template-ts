import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledRouterLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 5px 15px;
  transition: border 0.2s;
  border: 1px solid transparent;

  ${props => props.theme.fontStyle.routers};
`;

export const StyledRouterLinkPrimary = styled(StyledRouterLink)`
  color: ${props => props.theme.colors.primary};

  &:hover {
    border: 1px solid ${props => props.theme.colors.surface};
  }

  &.active {
    color: ${props => props.theme.colors.surface};
  }
`;
