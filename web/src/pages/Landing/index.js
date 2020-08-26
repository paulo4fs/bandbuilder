import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonComponent } from '../../components/LandingButton';
import {
  // Button,
  ButtonContainer,
  BackgroundContainer,
  Container,
} from './style';

const Landing = () => {
  return (
    <BackgroundContainer>
      <Container>
        <h1>BandBuilder</h1>
        <h4>Forme sua banda</h4>
        <ButtonContainer>
          <Link to='/search' style={{ textDecoration: 'none' }}>
            <ButtonComponent
              color='white'
              fontColor='#D6309D'
              text='Buscar'
              fa='faSearch'
            />
          </Link>
          <Link to='/form' style={{ textDecoration: 'none' }}>
            <ButtonComponent
              color='#D6309D'
              fontColor='white'
              text='Anunciar'
              fa='faStar'
            />
          </Link>
        </ButtonContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default Landing;
