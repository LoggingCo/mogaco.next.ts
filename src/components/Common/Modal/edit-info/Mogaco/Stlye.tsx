import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

type ModalEditNameProps = {
  index: number;
};

export const Wrapper = styled.div`
  width: 90%;
  margin: 16px auto;
  ${flexAlignCenter};
  justify-content: space-between;
`;
export const Name = styled.div<ModalEditNameProps>`
  & > span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ index }) =>
      index === 0 ? '#00C7AE' : index === 1 ? '#FFA195' : index === 2 && '#FFC700'};
    margin-right: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  & p {
    & span {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
    margin-right: 12px;
  }
`;

export const ButtonGroup = styled.div``;
