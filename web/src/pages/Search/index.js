import React from 'react';
import { BackgroundContainer, InputContainer, Container } from './style';

const Search = () => {
  return (
    <>
      <BackgroundContainer>
        <Container>
          <h1>
            Encontre Músicos <br /> Disponíveis
          </h1>
          <div>welcome to the search</div>
          <InputContainer>
          <form action="">
            <label htmlFor="">Instrumento</label>
            <label htmlFor="">Dia da semana</label>
            <select>
              <option>Segunda</option>
              <option>Terça</option>
              <option>Quarta</option>
              <option>Quinta</option>
              <option>Sexta</option>
            </select>
            <label htmlFor="">Horário</label>

          </form>
          </InputContainer>
        </Container>
      </BackgroundContainer>
    </>
  );
};

export default Search;
