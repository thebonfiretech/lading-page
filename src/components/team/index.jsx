import React from 'react'

import { Container, MembersContainer } from './styles.js'

import MembersPhotos from '../membersPhotos'

import Title from '../title'

const Team = ({ id }) => {
  return (
    <Container id={id}>
      <Title title="Equipe" size="48px" width="80%"/>
      <MembersContainer>
        <MembersPhotos name="João Dutra" position="CEO;Desenvolvedor Full Stack;  
          Gerente de Produtos" photo='../../public/images/dutra.svg' padding="89px"/>
        <MembersPhotos name="Amanda Lopes" position="Designer de Produtos" photo='../../public/images/amanda.svg' />
        <MembersPhotos name="Gabriela Viana" position="Desenvolvedora Front End" photo='../../public/images/gabi.svg'/>
        <MembersPhotos name="Adrian Jonathan" position="Desenvolvedor Front End" photo='../../public/images/adrian.svg'/>
        </MembersContainer>
    </Container>
  );
};

export default Team;