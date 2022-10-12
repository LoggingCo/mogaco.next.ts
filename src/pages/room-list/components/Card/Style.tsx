import styled from 'styled-components';
import { flexCenter, flexJustifyBetween } from '../../../../styles/common';

type CardStyledType = {
  filp: boolean;
};

// card styled
export const Wrapper = styled.div<CardStyledType>`
  margin: 16px;
  width: 370px;
  height: 320px;
  transition: all 0.5s ease-in-out;
  /* transform: ${({ filp }) => (filp ? 'rotateY(180deg)' : 'rotateY(0deg)')}; */
  border-radius: 16px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1);
`;

// front styled
export const Front = styled.div`
  padding-top: 64px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.palette.primary[100]};
  position: relative;
  height: 100%;
`;

export const FrontTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;

  & span {
    border-bottom: 2px solid ${({ theme }) => theme.palette.yellow};
  }
`;

export const FrontDesc = styled.div`
  padding: 32px;
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight.medium};
  color: ${({ theme }) => theme.palette.gray[300]};
`;

export const FrontSetting = styled.div`
  & > p {
    margin-bottom: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  & > span {
    color: #777777;
  }
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

// back styled
export const Back = styled.div`
  border-radius: 16px;
  /* transform: rotateY(180deg); */
  background-color: ${({ theme }) => theme.palette.gray[100]};
  position: relative;
  height: 100%;
  ${flexCenter};
`;

export const BackContent = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.palette.primary[300]};
  ${flexCenter};
  flex-direction: column;

  & > div {
    width: 100%;
    padding: 0 24px;
    ${flexJustifyBetween};
    margin: 8px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const BackButton = styled.button`
  margin-top: 32px;
  display: block;
  background-color: ${({ theme }) => theme.palette.primary[300]};
  color: ${({ theme }) => theme.palette.fontSubColor};
  padding: 16px 32px;
  border-radius: 8px;
  :hover {
    opacity: 0.6;
  }
`;
