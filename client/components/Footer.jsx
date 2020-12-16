import React from 'react';

import { __Footer } from '../styles/__Footer';
import { __Flex, __SocialLogo } from '../styles/__Utils';
import githubLogo from '../icons/logo-github.svg';
import linkedinLogo from '../icons/logo-linkedin.svg';
import twitterLogo from '../icons/logo-twitter.svg';
import fbLogo from '../icons/logo-facebook.svg';

const Footer = () => (
  <__Footer>
    <h3>Janis, Erick, Shirin, Tania</h3>
    <h3>Social Media</h3>
    <__Flex row gap>
      <__SocialLogo src={fbLogo} />
      <__SocialLogo src={twitterLogo} />
      <__SocialLogo src={linkedinLogo} />
      <__SocialLogo src={githubLogo} />
    </__Flex>
  </__Footer>
)

export default Footer;
