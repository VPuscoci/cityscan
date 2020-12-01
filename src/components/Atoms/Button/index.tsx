import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

const sizes = {
  sm: tw`text-xs lg:text-sm px-4 py-2 max-w-xs`,
  md: tw`text-sm lg:text-lg px-6 py-3 max-w-sm`,
  lg: tw`px-12 py-4 text-xl  max-w-md`,
};

const variants = {
  primary: tw`bg-green-0 hover:bg-light-green`,
  secondary: tw`bg-orange-1 hover:bg-orange-0`,
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
  ${tw`text-center rounded focus:outline-none`}
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
