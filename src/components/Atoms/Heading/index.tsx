import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type TType = {
  type: 'h1' | 'h2' | 'h3' | 'h4';
  center?: Boolean;
};

const hTypes = {
  h1: tw`text-xl md:text-2xl`,
  h2: tw`text-base md:text-lg`,
  h3: tw`text-sm md:text-base`,
  h4: tw`text-xs md:text-sm`,
};

const StyledHeading = styled.h1`
  ${tw`mb-2 font-bold`}
  ${({ type }: TType) => hTypes[type]}
  ${({ center }: TType) => center && tw`text-center`}
`;

const Heading: React.FC<TType> = ({
  children,
  type = 'h1',
  center,
  ...rest
}) => {
  if (!children) return null;

  return (
    <StyledHeading as={type} type={type} center={center} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
