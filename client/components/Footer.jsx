import React from 'react';

import { __Footer } from '../styles/__Footer';
import { __Flex, __Logo } from '../styles/__Utils';
import githubLogo from '../icons/logo-github.svg';
import linkedinLogo from '../icons/logo-linkedin.svg';
import twitterLogo from '../icons/logo-twitter.svg';
import fbLogo from '../icons/logo-facebook.svg';

const Footer = () => (
  <__Footer>
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

export default Footer;
