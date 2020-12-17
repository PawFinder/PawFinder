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
    mediumImg,
    name,
    age,
    gender,
    size,
    type,
    desc,
    contact,
    active,
    setActive,
  } = props;
  return (
    <__PetCard>
      <__TopPetCard>
        <__Flex row gap>
          <img src={mediumImg} alt="medium pet image"/>
          <__Flex column gap>
            <h1>{name}</h1>
            <__Flex row gap>
              <__Flex column>
                <h1>{`Age: ${age}`}</h1>
                <h1>{`Type: ${type}`}</h1>
              </__Flex>
              <__Flex column>
                <h1>{`Gender: ${gender}`}</h1>
                <h1>{`Size: ${size}`}</h1>
              </__Flex>
            </__Flex>
          </__Flex>
        </__Flex>
      </__TopPetCard>
      <__BottomPetCard>
        <__Flex column gap>
          <p>{`Description: ${desc}`}</p>
          <p>{`Email: ${contact.email}`}</p>
          <p>{`Phone: ${contact.phone}`}</p>
        </__Flex>
      </__BottomPetCard>
      <__PetCardBackground onClick={() => setActive(!active)}/>
    </__PetCard>
  );
};

export default ActivePetCard;
