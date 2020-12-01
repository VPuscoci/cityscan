import styled from 'styled-components';
import tw from 'twin.macro';
import Heading from '../../Atoms/Heading';
import { ReactComponent as BackArrow } from '../../../assets/images/back.svg';

export const StyledWrapper = styled.div`
  ${tw`w-full flex flex-row justify-between lg:justify-start items-baseline text-xs`};
  & {
    span {
      ${tw`lg:mr-4`}
    }
  }
`;

export const StyledBackIcon = styled(BackArrow)`
  ${tw`w-7 h-7 text-white fill-current inline`}
`;

export const StyledHeader = styled.header`
  ${tw`py-2 px-4 bg-dark-green w-full flex`};
  ${tw`lg:absolute`}
`;

export const StyledLogo = styled.img`
  ${tw`w-8 mr-2 float-left`}
`;

export const StyledHeading = styled(Heading)`
  ${tw`pt-1 italic float-left`}
`;

export const StyledLink = styled.a`
  ${tw`m-auto`}
`;
