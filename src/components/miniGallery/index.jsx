import React from 'react';
import { Container, GalleryPhotos, GalleryContainer } from './styles.js';
import Gallery from '../gallery';
import GalleryMobile from '../galleryMobile';

const MiniGallery = ({ id }) => {
  return (
    <Container id={id}>
      <GalleryContainer>
      <GalleryPhotos reverse={false}>
        <Gallery width="336px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="260px" height="228px" />
      </GalleryPhotos>
      <GalleryPhotos reverse={true}>
        <Gallery width="336px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="260px" height="228px" />
      </GalleryPhotos>
      <GalleryMobile/>
      </GalleryContainer>
        
    </Container>
  );
};

export default MiniGallery;
