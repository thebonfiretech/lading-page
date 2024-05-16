import React from 'react'

import { Container, InformationArea} from './styles.js'


const ButtonLink = ({title, link, Icone}) => {

  function goToSocialMidia(){
    window.location.href = link
  }
  
  return(
     <Container onClick={goToSocialMidia}>
       <InformationArea>
           {Icone}
           {title}
       </InformationArea>
     </Container>
  )

}

export default ButtonLink