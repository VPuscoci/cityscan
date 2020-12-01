import styled from 'styled-components';
import tw from 'twin.macro';
import { ReactComponent as AirplaneImage } from '../../../assets/images/plane.svg';

export const StyledWrapper = styled.div`
  ${tw`w-full flex flex-row justify-between lg:justify-start items-baseline text-xs`};
  & {
    span {
      ${tw`lg:mr-4`}
    }
  }
`;

export const StyledPlaneIcon = styled(AirplaneImage)`
  ${tw`w-10 h-10 text-white fill-current inline`}
`;

export const StyledDuration = styled.span`
  ${tw``}
`;
export const StyledFlightPath = styled.span`
  ${tw``}
`;
export const StyledPrice = styled.span`
  ${tw`font-bold italic`}
`;
