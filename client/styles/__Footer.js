import styled from 'styled-components';

export const __Footer = styled.footer`
  grid-area: footer;
  border: .1em solid blue;
  padding: 1.8em;
  text-align: center;
  * + * {
    margin-top: .25em;
  }
`
