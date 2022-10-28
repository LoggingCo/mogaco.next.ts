import styled from 'styled-components';
import { flexCenter } from 'styles/common';

export const Container = styled.div`
  padding: 16px 0;
  ${flexCenter}
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};

  & button {
    width: 90%;
    height: 48px;
    background-color: ${({ theme }) => theme.palette.primary[200]};
    color: ${({ theme }) => theme.palette.fontSubColor};

    :hover {
      background-color: ${({ theme }) => theme.palette.primary[300]};
    }
  }
`;
