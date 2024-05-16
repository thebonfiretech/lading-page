import React from "react"
import { Container } from './styles.js'

const Gallery = ({ image, width, height }) => {
  return (
    <Container photo={image} width={width} height={height}></Container>
  )
}

export default Gallery
