import React from 'react';

import { __NavBar } from '../styles/__NavBar';
import { __Btn } from '../styles/__Utils';

const NavBar = () => {
  return (  
    <__NavBar>
      <__Btn secondary>Favs</__Btn>
      <img alt="PawFinder logo"/>
      <__Btn primary>Login</__Btn>
    </__NavBar>
  ) 
}

export default NavBar;
