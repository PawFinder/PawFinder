import styled, { css } from 'styled-components';

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
  padding: .6em 1em;
  border: none;
  font-size: 1.25em;
  font-weight: bold;
  margin: .25em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  ${(props) => props.primary && css`
    background-color: red;
    color: white;
  `}
  ${(props) => props.secondary && css`
    background-color: white;
    color: red;
    border: .05em solid red;
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
