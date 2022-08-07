import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledRouterLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  transition: color 0.2s;

  ${props => props.theme.fontStyle.routers};
`;

export const StyledRouterLinkSecondary = styled(StyledRouterLink)`
  color: ${props => props.theme.colors.primary};

  &.active {
    color: ${props => props.theme.colors.surface};
  }
`;
