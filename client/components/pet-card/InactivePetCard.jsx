import React from 'react';

import { __InactivePetCard } from '../../styles/__PetCard';

const InactivePetCard = (props) => {
  const { image, name, active, setActive } = props;
  return (
    <__InactivePetCard column onClick={() => setActive(!active)}>
      <img src={image} alt="pet image"/>
      <h1>{name}</h1>
    </__InactivePetCard>
  );
};

export default InactivePetCard;
