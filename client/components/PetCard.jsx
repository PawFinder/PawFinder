import React, { useState } from 'react';
import ActivePetCard from './pet-card/ActivePetCard';
import InactivePetCard from './pet-card/InactivePetCard';

import { __Flex } from '../styles/__Utils';

const PetCard = (props) => { 
  const [active, setActive] = useState(false);
  const {
    largeImg,
    mediumImg,
    largeImg,
    name,
    age,
    gender,
    status,
<<<<<<< HEAD
    breed,
=======
>>>>>>> 31bb9800ec3273d0e30e7089f82a4ab19b47abd2
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
        status={status}
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
