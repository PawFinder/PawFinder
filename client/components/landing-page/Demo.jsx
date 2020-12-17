import React from 'react';

import PetCard from '../PetCard';
import DialogSelect from './Search';
import { __Demo, __ExampleContainer } from '../../styles/__Demo';
import { __Flex } from '../../styles/__Utils';
import { demoData } from './data';

const Demo = () => {
  const demoPetCards = demoData.map((petData) => (
    <PetCard
      type={petData.type}
      name={petData.name}
      age={petData.age}
      gender={petData.gender}
      size={petData.size}
      desc={petData.description}
      contact={petData.contact}
      smallImg={petData.photos[0].small}
      mediumImg={petData.photos[0].medium}
    />
  ));

  return (
    <__Demo>
      <__ExampleContainer>
        <DialogSelect />
        <__Flex row spaceAround wrap>
          {demoPetCards}
        </__Flex>
      </__ExampleContainer>
    </__Demo>
  );
};

export default Demo;
