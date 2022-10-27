import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

type TodoStyledType = {
  state: boolean;
};

export const Header = styled.div`
  padding: 0 1rem;
  color: ${({ theme }) => theme.palette.fontSubColor};
  background-color: ${({ theme }) => theme.palette.primary[300]};
  height: 2rem;
  ${flexAlignCenter}
  justify-content: space-between;

  & button {
    color: ${({ theme }) => theme.palette.fontSubColor};
    :hover {
      opacity: 0.7;
      transform: scale(1.2);
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.primary[300]};

  & li {
    margin: 1rem 0;
    ${flexAlignCenter}
  }
`;

export const TodoState = styled.span<TodoStyledType>`
  width: 1rem;
  height: 1rem;
  display: inline-block;
  border-radius: 50%;
  margin-right: 1rem;

  background-color: ${({ theme }) => theme.palette.gray[200]};
  border: ${({ state, theme }) => state && `4px solid ${theme.palette.gray[300]}`};
  cursor: pointer;

  :hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

export const TodoList = styled.span<TodoStyledType>`
  display: inline-block;
  background-color: ${(props) => (props.state ? props.theme.palette.gray[200] : 'transparent')};
  text-decoration: ${(props) => (props.state ? 'line-through' : 'none')};
  cursor: pointer;

  :hover {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    transform: scale(1.1);
  }
`;
