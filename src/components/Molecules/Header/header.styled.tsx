import styled from 'styled-components';
import tw from 'twin.macro';
import Heading from '../../Atoms/Heading';

export const StyledHeader = styled.header`
  ${tw`py-2 px-4 bg-dark-green`}
`;

export const StyledLogo = styled.img`
  ${tw`w-8 mr-2 float-left`}
`;

export const StyledHeading = styled(Heading)`
  ${tw`pt-1 italic`}
`;