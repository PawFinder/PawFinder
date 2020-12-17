import React, { useState } from 'react';

import { __Footer } from '../styles/__Footer';
import { __Flex, __Logo, __Paw } from '../styles/__Utils';
import githubLogo from '../icons/logo-github.svg';
import linkedinLogo from '../icons/logo-linkedin.svg';
import twitterLogo from '../icons/logo-twitter.svg';
import fbLogo from '../icons/logo-facebook.svg';
import paw from '../icons/paw.svg';

const Footer = () => {
  const [pawTwo, setPawTwo] = useState(0);
  const [pawThree, setPawThree] = useState(0);
  const [pawFour, setPawFour] = useState(0);

  setTimeout(() => setPawTwo(1), 17000);
  setTimeout(() => setPawThree(2), 20000);
  setTimeout(() => setPawFour(1), 23000);
  return (
    <__Footer>
      <__Paw one src={paw} />
      <__Paw two src={paw} style={{opacity: pawTwo}}/>
      <__Paw three src={paw} style={{opacity: pawThree}}/>
      <__Paw four src={paw} style={{opacity: pawFour}}/>
      <h3>Janis, Erick, Shirin, Tania</h3>
      <h3>Social Media</h3>
      <__Flex row gap>
        <__Logo src={fbLogo} />
        <__Logo src={linkedinLogo} />
        <__Logo src={twitterLogo} />
        <__Logo src={githubLogo} />
      </__Flex>
    </__Footer>
  )
}

export default Footer;
