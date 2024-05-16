import React from "react"

import {Container} from './styles.js'

const Title = ({size, title, width}) => {
  return(
    <>
    <Container size={size}  width={width}>
      {title}
    </Container>
      </>
  )
}


export default Title