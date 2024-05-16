import React from 'react';
import { Container, GalleryPhotos, GalleryPhotos2, GalleryContainer } from './styles.js';
import Gallery from '../gallery';
import GalleryMobile from '../galleryMobile';

const MiniGallery = ({ id }) => {
  return (
    <Container id={id}>
      <GalleryContainer>
      <GalleryPhotos>
        <Gallery width="336px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="260px" height="228px" />
      </GalleryPhotos>
      <GalleryPhotos2>
        <Gallery width="336px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="158px" height="228px" />
        <Gallery width="260px" height="228px" />
      </GalleryPhotos2>
      <GalleryMobile/>
      </GalleryContainer>
        
    </Container>
  );
};

export default MiniGallery;
