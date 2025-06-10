import React from "react";
import { Container } from './styles.js';

const Gallery = ({ image, width, height, alt = '' }) => {
  return (
    <Container width={width} height={height}>
      <img src={image} alt={alt} loading="lazy" />
    </Container>
  );
};

export default Gallery;

