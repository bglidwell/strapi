import styled from 'styled-components';
import { Text } from '@buffetjs/core';

const State = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 1rem;
  border-radius: 0.2rem;
  height: 2.5rem;
  ${({ theme, isGreen }) =>
    isGreen
      ? `
        border: 1px solid #aad67c;
        background-color: #e6f8d4;
        ${Text} {
            color: ${theme.main.colors.green};
        }
    `
      : `
        border: 1px solid #A5D5FF;
        background-color: #E4F0FC;
        ${Text} {
            color: ${theme.main.colors.mediumBlue};
        }
    `};
`;

export default State;
