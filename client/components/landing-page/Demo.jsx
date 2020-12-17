import React, { useState } from 'react';
import axios from 'axios';
import PetCard from '../PetCard';
import DialogSelect from './Search';
import { __Demo, __ExampleContainer } from '../../styles/__Demo';
import { __Flex } from '../../styles/__Utils';
import { demoData } from './data';

const Demo = () => {
  const [realData, setRealData] = useState(null);
  const handleOk = (age, type, gender, size, location) => {
    axios
      .post('http://localhost:3000/feed', {
        age: age,
        type: type,
        gender: gender,
        size: size,
        location: location,
      })
      .then((res) => {
        const petsWithPhotosArr = res.data.filter(
          (animal) => animal.photos.length > 0
        );
        setRealData(
          petsWithPhotosArr.map((animal) => (
            <PetCard
              type={animal.type}
              name={animal.name}
              age={animal.age}
              gender={animal.gender}
              size={animal.size}
              desc={animal.description}
              contact={animal.contact}
              mediumImg={animal.photos[0].medium}
              largeImg={animal.photos[0].large}
              status={animal.status}
            />
          ))
        );
      });
  };

  const demoPetCards = demoData.map((petData) => (
    <PetCard
      type={petData.type}
      name={petData.name}
      age={petData.age}
      gender={petData.gender}
      size={petData.size}
      desc={petData.description}
      contact={petData.contact}
      largeImg={petData.photos[0].large}
      mediumImg={petData.photos[0].medium}
    />
  ));

  return (
    <__Demo>
      <__ExampleContainer>
        <DialogSelect handleOk={handleOk} />
        <__Flex row spaceAround wrap>
          {realData ? realData : demoPetCards}
        </__Flex>
      </__ExampleContainer>
    </__Demo>
  );
};

export default Demo;
