import styled from 'styled-components';
import tw from 'twin.macro';
import { ReactComponent as AirplaneImage } from '../../../assets/images/plane.svg';

export const StyledWrapper = styled.div`
  ${tw`p-2 w-full flex flex-row`};
`;

export const StyledPlaneIcon = styled(AirplaneImage)`
  ${tw`w-10 h-10 text-white fill-current inline`}
`;
