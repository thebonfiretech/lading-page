import React from "react"

import {Container} from './styles.js'

const Title = ({size, title, width, gradient}) => {
  return(
    <>
    <Container gradient={gradient} size={size}  width={width}>
      {title}
    </Container>
      </>
  )
}


export default Title