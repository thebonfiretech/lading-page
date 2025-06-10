import React from 'react';

import { Container, MembersContainer } from './styles.js';
import MembersPhotos from '../membersPhotos';
import AdrianPhoto from '/images/adrian.svg';
import DutraPhoto from '/images/dutra.svg';
import GabiPhoto from '/images/gabi.svg';

import Title from '../title';

const Team = ({ id }) => {
  return (
    <Container id={id}>
      <Title gradient="linear-gradient(100deg, #0139FE 0%, #0697C5 10%, #0697C5 20%)" title="Equipe" size="48px" width="85%" />
      <MembersContainer>
        <MembersPhotos
          name="João Dutra"
          position="CEO; Desenvolvedor Full Stack; Gerente de Produtos"
          photo={DutraPhoto}
        />

        <MembersPhotos
          name="Gabriela Viana"
          position="Desenvolvedora Front End; Designer"
          photo={GabiPhoto}
        />
        <MembersPhotos
          name="Adrian Jonathan"
          position="Desenvolvedor Mobile; Designer"
          photo={AdrianPhoto}
        />
      </MembersContainer>
    </Container>
  );
};

export default Team;
