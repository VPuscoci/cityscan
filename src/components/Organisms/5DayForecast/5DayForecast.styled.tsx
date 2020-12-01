import styled from 'styled-components';
import tw from 'twin.macro';
import Heading from '../../Atoms/Heading';
import Button from '../../Atoms/Button';

export const StyledForecastData = styled.section`
  ${tw`flex w-full flex-row justify-between lg:justify-start items-center`} & {
    > span {
      ${tw`lg:mr-4`}
    }
  }
`;
