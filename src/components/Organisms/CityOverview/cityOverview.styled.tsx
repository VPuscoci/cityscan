import styled from 'styled-components';
import tw from 'twin.macro';
import Heading from '../../Atoms/Heading';
import Button from '../../Atoms/Button';
import amsterdam from '../../../assets/images/amsterdam.jpg';
import bratislava from '../../../assets/images/bratislava.jpg';
import madrid from '../../../assets/images/madrid.jpg';
import { ReactComponent as AirplaneImage } from '../../../assets/images/plane.svg';

const cityImages: any = {
  amsterdam,
  bratislava,
  madrid,
};

type TWrapper = {
  cityName: string;
};

export const StyledWrapper = styled.section<TWrapper>`
  ${tw`py-2 px-4 h-screen w-full flex flex-col`};
  ${({ cityName }) =>
    `background-image: url(${cityImages[cityName.toLowerCase()]})`};
  ${tw`bg-cover`}
`;

export const StyledHeading = styled(Heading)`
  ${tw`text-white`}
`;

export const StyledButton = styled(Button)`
  ${tw`m-auto self-end`}
`;

export const StyledTemperature = styled.div`
  ${tw`p-2 mt-2 self-end text-white text-xl bg-green-1 bg-opacity-50 rounded-lg`}
`;

export const StyledPlaneIcon = styled(AirplaneImage)`
  ${tw`w-10 h-10 text-white fill-current`}
`;
