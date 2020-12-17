import styled, { css, keyframes } from 'styled-components';

export const __Flex = styled.section`
  ${(props) => props.row && css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `};

  ${(props) => props.column && css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `};

  ${(props) => props.gap && css`
    gap: 2em;
  `};

  ${(props) => props.wrap && css`
    flex-wrap: wrap;
    gap: 5em;
  `};

  ${(props) => props.spaceAround && css`
    justify-content: space-around;
    width: 100%;
    height: 100%;
  `}
`;

export const __Logo = styled.img`
  width: 1.8em;
  &:hover {
    cursor: pointer;
    opacity: 70%;
  }
  ${(props) => props.main && css`
    width: 3.5em;
    &:hover {
      opacity: 100%;
      cursor: default;
    }
  `}
`;
export const __Btn = styled.button`
border-radius: 5px;
  padding: .6em 1em;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border: none;
  font-size: 1.25em;
  font-weight: bold;
  margin: .25em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: lightgray; 
    cursor: pointer;
  }
  ${(props) => props.primary && css`
    background-color: red;
    color: whitesmoke;
  `}
  ${(props) => props.secondary && css`
    background-color: whitesmoke;
    color: red;
    // border: .05em solid red;
  `}
`;

export const __TranslucentBox = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5em 6em;
  text-align: center;
  ${(props) => props.translate && css`
    transform: translateX(34em) translateY(-5em);
  `}
  & h1 {
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  }

  & p {
    margin: .2rem;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const __Paw = styled.img`
  position: absolute;

  ${(props) => props.one && css`
    right: 16%;
    bottom: 4%;
    transform: rotate(60deg);
    animation: 15000ms ${fadeIn} ease-in-out;
  `}
  ${(props) => props.two && css`
    right: 9%;
    bottom: 1%;
    transform: rotate(60deg);
    animation: 15000ms ${fadeIn} 3000ms ease-in-out;
  `}
  ${(props) => props.three && css`
    right: 8%;
    bottom: 48%;
    transform: rotate(60deg);
    animation: 15000ms ${fadeIn} 6000ms ease-in-out;
  `}
  ${(props) => props.four && css`
    right: 2%;
    transform: rotate(60deg);
    animation: 15000ms ${fadeIn} 9000ms ease-in-out;
  `}
`;