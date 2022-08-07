import styled from 'styled-components';

import { IPropsFlex } from './types';

const StyledFlex = styled.div<IPropsFlex>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledFlexList = styled.ul<IPropsFlex>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledFlexRow = styled(StyledFlex)`
  justify-content: ${props => props.content};
`;

export const StyledFlexCol = styled(StyledFlex)`
  flex-direction: column;
  align-content: ${props => props.content};
`;

export const StyledFlexListRow = styled(StyledFlexList)`
  justify-content: ${props => props.content};
`;

export const StyledFlexListCol = styled(StyledFlexList)`
  flex-direction: column;
  align-content: ${props => props.content};
`;
