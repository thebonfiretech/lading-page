import React from 'react'

import { Container, InformationArea} from './styles.js'


const ButtonLink = ({title, onAction, Icone}) => {
  return(
     <Container onClick={() => onAction()}>
       <InformationArea>
           {Icone}
           {title}
       </InformationArea>
     </Container>
  )

}

export default ButtonLink