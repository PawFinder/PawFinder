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
    largeImg,
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
        <img
          style={{
            width: '30em',
            height: '35em',
            objectFit: 'cover',
            margin: '.5em 3.5em'
          }}
          src={largeImg}
          alt='medium pet image'
        />
      </__TopPetCard>
      <__BottomPetCard>
        <h1 style={{ marginBottom: '.3.5em', fontSize: '3.2rem' }}>{`🎄 ${name}`}</h1>
        <__Flex gap row>
          <__Flex column>
            <h1 style={{ fontSize: '1.7rem'}}>{`Type: ${type}`}</h1>
            <h1 style={{ fontSize: '1.7rem'}}>{`Age: ${age}`}</h1>
          </__Flex>
          <__Flex column>
            <h1 style={{ fontSize: '1.7rem'}}>{`Gender: ${gender}`}</h1>
            <h1 style={{ fontSize: '1.7rem'}}>{`Size: ${size}`}</h1>
          </__Flex>
        </__Flex>
        <p style={{ fontSize: '1.7rem', maxWidth: '70%', marginTop: '2.5em'}}>{`Description: ${desc}`}</p>
        <p style={{ fontSize: '1.7rem', maxWidth: '70%', marginTop: '3em'}}>{`Email: ${contact.email}`}</p>
        <p style={{ fontSize: '1.7rem', maxWidth: '70%'}}>{`Phone: ${contact.phone}`}</p>
      </__BottomPetCard>
      <__PetCardBackground onClick={() => setActive(!active)} />
    </__PetCard>
  );
};

export default ActivePetCard;
