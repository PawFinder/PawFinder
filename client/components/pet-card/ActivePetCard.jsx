import React from 'react';

import {
  __PetCard,
  __TopPetCard,
  __BottomPetCard,
  __PetCardBackground,
} from '../../styles/__PetCard';
import { __Flex } from '../../styles/__Utils';

const ActivePetCard = (props) => {
  const {
    image,
    name,
    age,
    gender,
    breed,
    size,
    video,
    desc,
    contact,
    active,
    setActive,
  } = props;
  return (
    <__PetCard>
      <__TopPetCard>
        <__Flex row gap>
          {image}
          <__Flex column gap>
            <h1>{name}</h1>
            <__Flex row gap>
              <__Flex column>
                <h1>{age}</h1>
                <h1>{breed}</h1>
              </__Flex>
              <__Flex column>
                <h1>{gender}</h1>
                <h1>{size}</h1>
              </__Flex>
            </__Flex>
            {`vid link: ${video}`}
          </__Flex>
        </__Flex>
      </__TopPetCard>
      <__BottomPetCard>
        <__Flex column gap>
          <p>{`Description: ${desc}`}</p>
          <p>{`Contact: ${contact}`}</p>
        </__Flex>
      </__BottomPetCard>
      <__PetCardBackground onClick={() => setActive(!active)}/>
    </__PetCard>
  );
};

export default ActivePetCard;
