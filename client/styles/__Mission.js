import styled from 'styled-components';
import backgroundImg from '../icons/owner-petting-adorable-cat.jpg'

export const __Mission = styled.main`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  grid-area: mission;
  filter: grayscale();
  /* border: 1px solid black; */
`;