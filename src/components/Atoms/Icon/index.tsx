import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type TIcon = {
  id: number;
  text: string;
};

const StyledIcon = styled.img`
  ${tw`inline`};
`;

const Icon: React.FC<TIcon> = ({ id, text, ...rest }) => {
  return (
    <StyledIcon
      src={`${process.env.PUBLIC_URL}/icons/weather/${id}.png`}
      alt={text}
      {...rest}
    />
  );
};

export default Icon;
