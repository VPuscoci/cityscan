import styled from 'styled-components';
import tw from 'twin.macro';
import Heading from '../../Atoms/Heading';

export const StyledHeading = styled(Heading)`
  ${tw`text-white text-center`}
`;

export const StyledTemperature = styled.div`
  ${tw`p-2 mt-4 mr-4 self-end text-white text-xl bg-green-1 bg-opacity-75 rounded-lg`}
`;
