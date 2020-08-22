import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 100vh;
  justify-items: right;
  align-items: center;
`;
export const Container = styled.div`
  grid-column: 1;
`;

export const ButtonContainer = styled.div`
  width: 20rem;
  display: flex;
`;

export const Button = styled.button`
  background: #bbb;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  font-size: 1.8rem;
`;
