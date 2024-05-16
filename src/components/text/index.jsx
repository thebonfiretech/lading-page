import React from "react"

import {Container} from './styles.js'

const Text = ({text, width}) => {
  return(
    <Container width={width}>
      {text}
    </Container>
  )
}


export default Text