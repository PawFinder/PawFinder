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
`;

export const __SocialLogo = styled.img`
  width: 2em;
  &:hover {
    cursor: pointer;
    opacity: 70%;
  }
`
