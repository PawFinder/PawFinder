import React from 'react';

import { __NavBar } from '../styles/__NavBar';
import { __Btn, __Logo } from '../styles/__Utils';
import pawFinderLogo from '../icons/location.svg';

const NavBar = () => {
  return (  
    <__NavBar>
      <__Btn secondary>Favs</__Btn>
      <__Logo main src={pawFinderLogo}/>
      <__Btn primary>Login</__Btn>
    </__NavBar>
  ) 
}

export default NavBar;
