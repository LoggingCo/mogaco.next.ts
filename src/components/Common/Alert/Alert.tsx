import React, { FC } from 'react';
import { useSetRecoilState } from 'recoil';
import * as Styled from './Style';

export interface AlertProps {
  variant?: 'alert' | 'confirm';
  title?: string;
  children?: React.ReactNode;
  onSucces?: () => void;
  onCancle?: () => void;
}

const Alert: FC<AlertProps> = ({ variant, title, children, onSucces, onCancle }: AlertProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        {title} <span>x</span>
      </Styled.Header>
      <Styled.Content>{children}</Styled.Content>
      <Styled.Button>
        <button onClick={onSucces}>확인</button>
        {variant === 'confirm' && <button onClick={onCancle}>취소</button>}
      </Styled.Button>
    </Styled.Wrapper>
  );
};
export default Alert;
