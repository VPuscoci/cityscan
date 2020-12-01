import styled from 'styled-components';
import tw from 'twin.macro';
import Heading from '../../Atoms/Heading';
import Button from '../../Atoms/Button';
import amsterdam from '../../../assets/images/amsterdam.jpg';
import bratislava from '../../../assets/images/bratislava.jpg';
import madrid from '../../../assets/images/madrid.jpg';

const cityImages: any = {
  amsterdam,
  bratislava,
  madrid,
};

type TWrapper = {
  cityName: string;
};

export const StyledWrapper = styled.section<TWrapper>`
  ${tw`pt-12 h-screen w-full flex flex-col justify-between`};
  ${({ cityName }) =>
    `background-image: url(${cityImages[cityName.toLowerCase()]})`};
  ${tw`bg-cover`}
`;

export const StyledHeading = styled(Heading)`
  ${tw`text-white`}
`;

export const StyledDetails = styled.section`
  ${tw`bg-green-1 w-full`}
`;

export const StyledButton = styled(Button)`
  ${tw`m-auto self-end`}
`;

export const StyledTemperature = styled.div`
  ${tw`p-2 mt-4 mr-4 self-end text-white text-xl bg-green-1 bg-opacity-50 rounded-lg`}
`;
