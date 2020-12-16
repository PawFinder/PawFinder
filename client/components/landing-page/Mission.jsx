import React from 'react';

import { __Mission } from '../../styles/__Mission';
import { __Flex, __TranslucentBox } from '../../styles/__Utils';

const Mission = () => {
  return (
    <__Mission>
      <__Flex row spaceAround>
        <__TranslucentBox translate>
          <h1>PAW FINDER</h1>
          <p>WORKING TOWARDS A FUTURE</p>
          <p>WHERE NO PET IS HOMELESS</p>
        </__TranslucentBox>
      </__Flex>
    </__Mission>
  )
}

export default Mission;