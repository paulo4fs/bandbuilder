import React from 'react';
import {
  Button,
  ButtonContainer,
  BackgroundContainer,
  Container,
} from './style';

const Landing = () => {
  return (
    <BackgroundContainer>
      <Container>
        <h1>BandBuilder</h1>
        <h3>Forme sua banda</h3>
        <ButtonContainer>
          <Button>Buscar</Button>
          <Button>Anunciar</Button>
        </ButtonContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default Landing;
