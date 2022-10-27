import styled from 'styled-components';
import { flexAlignEnd } from 'styles/common';
export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 16px;
  ${flexAlignEnd}
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};
`;

export const Info = styled.div`
  margin-top: 48px;
  ${flexAlignEnd}
  flex-direction: column;

  & p {
    margin: 8px 0;
  }
`;

export const Name = styled.div`
  & > span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    border-bottom: 1px solid #0000ff;
    cursor: pointer;
  }

  & > a > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-top: 16px;
    text-align: right;
    text-decoration: underline;
    cursor: pointer;
    :hover {
      opacity: 0.3;
    }
  }
`;
