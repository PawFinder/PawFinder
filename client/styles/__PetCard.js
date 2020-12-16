import styled from 'styled-components';

export const __PetCard = styled.figure`
  border: 1px solid blueviolet;
  padding: .8em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const __PetCardBackground = styled.div`
  position: absolute;
  width: 200px;
  top: 100%;
  bottom: 100%;
  background: black;
  filter: blur(20px);
`;

export const __TopPetCard = styled.article`

`;

export const __BottomPetCard = styled.article`

`;

export const __InactivePetCard = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 400ms ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;