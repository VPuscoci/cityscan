import React from 'react';
import Container from '../../Atoms/Container';
import Heading from '../../Atoms/Heading';
import Button from '../../Atoms/Button';
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <Heading type="h1" center>
        Welcome James,
      </Heading>
      <Heading type="h2" center>
        The CityScan app will help you find your next home!
      </Heading>
      <Button size="sm" variant="primary" linkTo="/cities">
        Get started
      </Button>
    </Container>
  );
};

export default Home;
