import React from 'react';

import { Container } from './styles';

const IconsContainers = ({Icon}) => {
  return (
    <Container>
      {
         Icon && (
               <Icon color='#eeeeee' size={25}/>
         )
       }
    </Container>
  )
}


export default IconsContainers