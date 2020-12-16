import React from 'react';

import { __PetCard, __TopPetCard, __BottomPetCard } from '../styles/__PetCard';
import { __Flex } from '../styles/__Utils';

const PetCard = (props) => {
  const { image, name, age, gender, breed, size, video, desc, contact } = props;
  return (
    <__PetCard>
      <__TopPetCard>
        <__Flex row gap>
          {image}
          <__Flex>
            <h1>{name}</h1>
            <__Flex>
              
            </__Flex>
          </__Flex>
        </__Flex>
      </__TopPetCard>
      <__BottomPetCard>TEST</__BottomPetCard>
    </__PetCard>
  )
}

export default PetCard;