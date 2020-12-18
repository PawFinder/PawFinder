import styled from 'styled-components';

export const __PetCardBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const __PetCard = styled.figure`
  background-color: whitesmoke;
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 20%;
  bottom: 0%;
  right: 0%;
  left: 20%;
  /* border-radius: 25px; */
  text-align: center;
  box-shadow: 10px 10px 20px black;
  z-index: 1;
`;

export const __TopPetCard = styled.article`
`;

export const __BottomPetCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const __InactivePetCard = styled.figure`
  display: flex;
  width: 10em;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  height: 13em;
  margin: 1.4em .5em;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 400ms ease-in-out;
  font-size: 1.75rem;
  background-color: whitesmoke;
  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.5);
  }
  & img {
    width: 100%;
    height: 65%;
    object-fit: cover;
  }
  & div {
    width: 100%;
    height: 40%;
    display: grid;
    transform: translateY(-.8em);
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }

  & h1 {
  }
`;