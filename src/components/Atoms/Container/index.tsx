import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`w-full lg:w-desktop m-auto`}
`;

const Container: React.FC = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};
export default Container;
