import styled, { keyframes } from 'styled-components';
import backgroundImg from '../icons/owner-petting-adorable-cat.jpg'

const getColor = keyframes`
  0% {
    filter: grayscale(1);
  }
  100% {
    filter: grayscale(0);
  }
`

export const __Mission = styled.main`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  grid-area: mission;
  animation: 2250ms ${getColor} ease-in;
`;