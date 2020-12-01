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
  ${tw`w-full min-h-screen flex flex-col justify-between lg:pt-14`};
  ${({ cityName }) =>
    `background-image: url(${cityImages[cityName.toLowerCase()]})`};
  ${tw`bg-cover`}
`;

export const StyledHeading = styled(Heading)`
  ${tw`italic mb-5`}
`;

export const StyledClimate = styled.p`
  ${tw`mb-5`}
`;

export const StyledWeather = styled.section`
  ${tw`bg-green-0 w-full px-2 py-4 mt-60vh lg:mt-70vh`}
`;

export const StyledFlights = styled.section`
  ${tw`bg-dark-green w-full px-2 py-4`}
`;

export const StyledButton = styled(Button)`
  ${tw`m-auto self-end`}
`;

export const StyledLiving = styled.section`
  ${tw`bg-orange-1 px-2 py-6 text-lg`}
  & {
    a {
      ${tw`underline`}
    }
  }
`;
