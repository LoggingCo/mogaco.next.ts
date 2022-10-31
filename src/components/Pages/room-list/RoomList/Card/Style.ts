import exp from 'constants';
import styled from 'styled-components';
import { flexCenter, flexJustifyBetween } from 'styles/common';

// styled-components
type CardStyledType = {
  isOpenCard: boolean;
  status?: boolean;
};

// card styled
export const Wrapper = styled.div<CardStyledType>`
  margin: 8px;
  width: 48%;
  min-height: 120px;
  ${({ isOpenCard }) => (isOpenCard ? 'height: 100%' : 'height: 120px')};
  position: relative;
  background-color: #edece9;
  transition: all 0.5s ease-in-out;
  border-radius: 16px;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  padding: 0 1rem;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    margin: 0 8px;
  }
`;

export const Title = styled.div`
  padding-bottom: 0.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.small};
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary[300]};
`;

export const State = styled.span`
  color: #999;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  color: #999;
  font-size: 12px;
`;

export const Content = styled.div<CardStyledType>`
  width: 50%;
  margin: 0 auto;
  height: ${({ isOpenCard }) => (isOpenCard ? '170px' : '0')};
  transition: height 0.5s ease-in-out;
  overflow: hidden;
  margin-top: 16px;
  font-size: ${({ theme }) => theme.fontSize.small};

  & p {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    font-size: 12px;
    font-weight: 100;
  }

  & input {
    background-color: #fff;
    text-align: center;
    border-radius: 8px;
    font-size: 12px;
    padding: 0.3rem 1rem;
  }

  & button {
    font-size: 12px;
    width: ${({ status }) => !status && '100%'};
    background-color: ${({ status, theme }) => !status && theme.palette.primary[300]};
    color: ${({ status }) => !status && '#fff'};
    height: ${({ status }) => !status && '24px'};
    border-radius: ${({ status }) => !status && '8px'};

    :hover {
      color: ${({ theme, status }) => status && theme.palette.primary[300]};
      background-color: ${({ status, theme }) => !status && theme.palette.primary[100]};
      color: ${({ status, theme }) => !status && theme.palette.primary[300]};
    }
  }
`;

export const Category = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  & span {
    margin: 0 4px;
    padding: 0.3rem;
    font-size: 10px;
    background-color: ${({ theme }) => theme.palette.primary[300]};
    color: ${({ theme }) => theme.palette.fontSubColor};
  }
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.palette.error};
  font-size: 12px;
`;

export const Inquiry = styled.p`
  color: ${({ theme }) => theme.palette.primary[300]};
  & span {
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary[300]};
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;
