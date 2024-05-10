import React from 'react'

import { Container, ElementsContainer } from './styles.js'

const CardsComponents = ({text, Icon}) => {
  return (
     <Container>
       <ElementsContainer>
         {
           Icon && (
                 <Icon color='#eeeeee' size={25}/>
           )
         }
         {text}
       </ElementsContainer>
     </Container>
  )
}

export default CardsComponents