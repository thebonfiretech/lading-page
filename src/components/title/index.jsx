import React from "react"

import {Container} from './styles.js'

const Title = ({size, title}) => {
  return(
    <>
    <Container size={size}>
      {title}
    </Container>
      </>
  )
}


export default Title