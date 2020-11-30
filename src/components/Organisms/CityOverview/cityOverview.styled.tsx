import styled from 'styled-components';
import tw from 'twin.macro';
import Heading from '../../Atoms/Heading';
import Button from '../../Atoms/Button';

export const StyledWrapper = styled.section`
  ${tw`py-2 px-4 bg-dark-green w-full`}
`;

export const StyledLogo = styled.img`
  ${tw`w-8 mr-2 float-left`}
`;

export const StyledHeading = styled(Heading)`
  ${tw`pt-2 italic text-black`}
`;

export const StyledButton = styled(Button)`
  ${tw`m-auto`}
`;
