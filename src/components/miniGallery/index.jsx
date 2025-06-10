import React from 'react';
import { Container, GalleryPhotos, GalleryContainer } from './styles.js';
import Gallery from '../gallery';
import GalleryMobile from '../galleryMobile';

const MiniGallery = ({ id }) => {
  return (
    <Container id={id}>
      <GalleryContainer>
      <GalleryPhotos reverse={false}>
        <Gallery image="/images/photoGallery2.png" width="336px" height="228px" />
        <Gallery  image="/images/photoGallery1.jpeg"  width="158px" height="228px" />
        <Gallery image="/images/photoGallery5.jpeg" width="260px" height="228px" />
      </GalleryPhotos>
      <GalleryPhotos reverse={true}>
        <Gallery image="/images/photoGallery6.jpeg" width="336px" height="228px" />
  <Gallery image="/images/photoGallery3.jpg" width="158px" height="228px" />
        <Gallery image="/images/photoGallery4.jpg" width="260px" height="228px" />
      </GalleryPhotos>
      <GalleryMobile/>
      </GalleryContainer>
        
    </Container>
  );
};

export default MiniGallery;
