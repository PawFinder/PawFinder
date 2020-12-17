import React, { useState } from 'react';
import ActivePetCard from './pet-card/ActivePetCard';
import InactivePetCard from './pet-card/InactivePetCard';

import { __Flex } from '../styles/__Utils';

const PetCard = (props) => { 
  const [active, setActive] = useState(false);
  const {
    smallImg,
    mediumImg,
    largeImg,
    name,
    age,
    gender,
    status,
    breed,
    size,
    type,
    desc,
    contact,
  } = props;
  return active ? (
    <__Flex row>
      <ActivePetCard
        largeImg={largeImg}
        name={name}
        age={age}
        gender={gender}
        size={size}
        type={type}
        desc={desc}
        contact={contact}
        active={active}
        setActive={setActive}
      ></ActivePetCard>
    </__Flex>
  ) : (
    <__Flex row>
      <InactivePetCard
        mediumImg={mediumImg}
        name={name}
        active={active}
        setActive={setActive}
      ></InactivePetCard>
    </__Flex>
  );
};

export default PetCard;
