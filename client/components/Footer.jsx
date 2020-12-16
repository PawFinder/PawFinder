import React from 'react';

import { __Footer } from '../styles/__Footer';
import { __Flex } from '../styles/__Utils';
import githubLogo from '../icons/logo-github.svg';
import linkedinLogo from '../icons/logo-linkedin.svg';
import twitterLogo from '../icons/logo-twitter.svg';
import fbLogo from '../icons/logo-facebook.svg';

const Footer = () => (
  <__Footer>
    <h3>Janis, Erick, Shirin, Tania</h3>
    <h3>Social Media</h3>
    <__Flex row gap>
      <img src={fbLogo} />
      <img src={twitterLogo} />
      <img src={linkedinLogo} />
      <img src={githubLogo} />
    </__Flex>
  </__Footer>
)

export default Footer;
