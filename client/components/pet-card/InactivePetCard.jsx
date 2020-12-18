import React from 'react';

import { __InactivePetCard } from '../../styles/__PetCard';

const InactivePetCard = (props) => {
  const { mediumImg, name, active, setActive } = props;
  return (
    <__InactivePetCard column onClick={() => setActive(!active)}>
      <img src={mediumImg} alt="pet image" />
      <div>
        <h1>{`❄ ${name} ❄`}</h1>
      </div>
    </__InactivePetCard>
  );
};

export default InactivePetCard;
