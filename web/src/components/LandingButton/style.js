import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => props.fontColor};
  border: 0;
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin: 1.5rem 1.5rem 0 0;
  font-size: 1.8rem;
  box-shadow: 0.4rem 0.4rem 1rem black;
  cursor: pointer;
  display: flex;
  transition: all 0.2s;
  p {
    margin-left: 0.5rem;
  }
  &:hover {
    box-shadow: 0px 0px 1rem white;
  }
  @media (max-width: 35em) {
    font-size: 50%;
  }
`;
