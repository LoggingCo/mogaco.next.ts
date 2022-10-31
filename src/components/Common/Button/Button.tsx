import { ButtonHTMLAttributes, FC } from 'react';
import * as Styled from './Style';

export interface ButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | 'primary'
    | 'primary-text'
    | 'primary-reverse'
    | 'secondary'
    | 'secondary-text'
    | 'secondary-reverse'
    | 'default';
  shape: 'default' | 'round';
  size: 'small' | 'medium' | 'large' | 'full';
}

const Button: FC<ButtonStyleProps> = ({ variant, shape, size, children, ...rest }) => {
  return (
    <Styled.Button variant={variant} shape={shape} size={size} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
