import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

const sizes = {
  sm: '',
  md: tw`w-1/2`,
  lg: tw`w-full`,
};

const variants = {
  primary: tw`bg-green-0 hover:bg-green-1`,
  secondary: tw`bg-orange-0 hover:bg-orange-1`,
};

type TButton = {
  size: 'sm' | 'md' | 'lg';
  variant: 'primary' | 'secondary';
  linkTo?: string;
};

const StyledButton = styled.button<TButton>`
  display: block;
  ${({ size }) => sizes[size]}
  ${({ variant }) => variants[variant]}
  ${tw`h-10 py-2 px-4`}
  ${tw`text-xs md:text-sm text-center rounded focus:outline-none`}
`;

type Props = TButton & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({
  children,
  size = 'sm',
  variant = 'primary',
  linkTo,
  ...rest
}) => {
  if (linkTo) {
    return (
      <StyledButton size={size} variant={variant} {...rest}>
        <Link to={linkTo}>{children}</Link>
      </StyledButton>
    );
  }
  return (
    <StyledButton size={size} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
