import React from 'react'

import { Container} from './styles.js'


const Button = ({title, onAction}) => {
  return(
     <Container onClick={() => onAction()}>
       {title}
     </Container>
  )
   
}

export default Button