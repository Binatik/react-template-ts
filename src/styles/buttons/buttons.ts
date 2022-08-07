import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #fff;
  color: ${props => props.theme.colors.secondary};
  transition: border 0.2s;

  ${props => props.theme.fontStyle.buttons};
`;

export const StyledButtonSecondary = styled(StyledButton)`
  color: ${props => props.theme.colors.primary};

  &:hover {
    border: 1px solid ${props => props.theme.colors.surface};
  }
`;
