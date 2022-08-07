import styled from 'styled-components';

const StyledParagraph = styled.p`
  display: block;
  color: ${props => props.theme.colors.secondary};

  ${props => props.theme.fontStyle.paragraphs};
`;

export const StyledParagraphSecondary = styled(StyledParagraph)`
  color: ${props => props.theme.colors.primary};
`;
