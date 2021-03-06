import styled from 'styled-components';
import BGone from '../../assets/images/BGone.png';

export const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  justify-items: right;
  align-items: center;
  background: url(${BGone});
  background-position: center;
  background-size: cover;
`;
export const Container = styled.div`
  color: white;
  font-family: 'Redressed', cursive;
  font-size: 3.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 35em) {
    font-size: 200%;
  }
`;

export const ButtonContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
`;

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
    font-size: 60%;
  }
`;
