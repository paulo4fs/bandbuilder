import React from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  ButtonContainer,
  BackgroundContainer,
  Container,
} from './styled';

const Landing = () => {
  return (
    <BackgroundContainer>
      <Container>
        <h1>BandBuilder</h1>
        <h4>Forme sua banda</h4>
        <ButtonContainer>
          <Button color='white' fontColor='black'>
            <FontAwesomeIcon icon={faSearch} /> Buscar
          </Button>
          <Button color='#D6309D' fontColor='white'>
            <FontAwesomeIcon icon={faStar} /> Anunciar
          </Button>
        </ButtonContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default Landing;
