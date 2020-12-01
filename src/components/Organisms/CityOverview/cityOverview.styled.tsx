import styled from 'styled-components';
import tw from 'twin.macro';
import Heading from '../../Atoms/Heading';
import Button from '../../Atoms/Button';
import amsterdam from '../../../assets/images/amsterdam.jpg';
import budapest from '../../../assets/images/budapest.jpg';
import madrid from '../../../assets/images/madrid.jpg';

const cityImages: any = {
  amsterdam,
  budapest,
  madrid,
};

type TWrapper = {
  cityName: string;
};

export const StyledWrapper = styled.section<TWrapper>`
  ${tw`h-88vh w-full flex flex-col justify-between`};
  ${tw`lg:w-1/3 lg:float-left lg:h-screen lg:border-dark-green lg:border-r-8 last:lg:border-r-0 lg:pt-14`};
  ${({ cityName }) =>
    `background-image: url(${cityImages[cityName.toLowerCase()]})`};
  ${tw`bg-cover`}
`;
export const StyledHeading = styled(Heading)`
  ${tw`text-white`}
`;

export const StyledDetails = styled.section`
  ${tw`bg-green-1 w-full px-2 py-4`}
`;

export const StyledButton = styled(Button)`
  ${tw`self-end`}
`;
