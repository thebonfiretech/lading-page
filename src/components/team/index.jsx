import React from 'react';

import { Container, MembersContainer } from './styles.js';
import MembersPhotos from '../membersPhotos';
import AdrianPhoto from '/images/adrian.svg';
import AmandaPhoto from '/images/amanda.svg';
import DutraPhoto from '/images/dutra.svg';
import GabiPhoto from '/images/gabi.svg';

import Title from '../title';

const Team = ({ id }) => {
  return (
    <Container id={id}>
      <Title title="Equipe" size="48px" width="80%" />
      <MembersContainer>
        <MembersPhotos 
          name="João Dutra" 
          position="CEO; Desenvolvedor Full Stack; Gerente de Produtos" 
          photo={DutraPhoto} 
          padding="89px" 
        />
        <MembersPhotos 
          name="Amanda Lopes" 
          position="Designer de Produtos" 
          photo={AmandaPhoto} 
        />
        <MembersPhotos 
          name="Gabriela Viana" 
          position="Desenvolvedora Front End" 
          photo={GabiPhoto} 
        />
        <MembersPhotos 
          name="Adrian Jonathan" 
          position="Desenvolvedor Front End" 
          photo={AdrianPhoto} 
        />
      </MembersContainer>
    </Container>
  );
};

export default Team;
