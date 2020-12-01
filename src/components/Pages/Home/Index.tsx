import React from 'react';
import Container from '../../Atoms/Container';
import Heading from '../../Atoms/Heading';
import Button from '../../Atoms/Button';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface HomeProps {}

const StyledContainer = styled(Container)`
  ${tw`flex flex-col justify-between h-88vh lg:h-screen items-center pt-32 pb-20 lg:pt-64 lg:pb-36`}
`;

const Home: React.FC<HomeProps> = () => {
  return (
    <StyledContainer>
      <div>
        <Heading type="h1" center>
          Welcome James,
        </Heading>
        <Heading type="h2" center>
          The CityScan app will help you find your next home!
        </Heading>
      </div>

      <Button size="md" variant="primary" linkTo="/cities">
        Get started
      </Button>
    </StyledContainer>
  );
};

export default Home;
