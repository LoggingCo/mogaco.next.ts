import styled from 'styled-components';
import { flexAlignCenter } from '@/libs/styles/common';

type UserStyleProps = {
  status: boolean;
};

export const Wrapper = styled.li`
  padding: 1.5rem 1rem;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.palette.primary[200]};
  }
`;

export const Header = styled.div<UserStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ status }) => (status ? 1 : 0.5)};
`;

export const User = styled.div`
  ${flexAlignCenter};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.medium};
  & span {
    margin-right: 8px;
    font-size: 12px;
  }
`;

export const Status = styled.span<UserStyleProps>`
  display: ${({ status }) => (status ? '#inline-block' : 'none')};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ status }) => status && '#008000'};
`;

export const Message = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    font-size: 12px;
    display: flex;
    align-items: flex-end;
  }
`;

export const LastMessage = styled.div`
  max-width: 80%;
  padding-top: 8px;
  font-size: 12px;
  color: #707070;
  display: flex;
  align-items: flex-end;
  text-indent: 16px;
  line-height: 1.2;
`;
