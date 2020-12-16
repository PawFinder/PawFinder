import React from 'react';

import PetCard  from '../PetCard';
import { __Demo, __ExampleContainer } from '../../styles/__Demo';
import { __Btn, __Flex } from '../../styles/__Utils';

const Demo = () => {
  return (
    <__Demo>
      <__ExampleContainer>
        <__Flex row>
          <PetCard image={<img alt='image'/>} name="Name" age="1" gender="female" breed="maltese" size="small" video="" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit aspernatur recusandae sed voluptas." contact="info"/>
          <PetCard image={<img alt='image'/>} name="Name" age="1" gender="female" breed="maltese" size="small" video="" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit aspernatur recusandae sed voluptas." contact="info"/>
          <PetCard image={<img alt='image'/>} name="Name" age="1" gender="female" breed="maltese" size="small" video="" desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit aspernatur recusandae sed voluptas." contact="info"/>
        </__Flex>
        <__Btn secondary>Adopt a Paw 🐶</__Btn>
      </__ExampleContainer>
    </__Demo>
  )
}

export default Demo;