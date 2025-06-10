import React from 'react';
import { GalleryPhotos, GalleryComponent } from './styles.js';
import Gallery from '../gallery'; 

const GalleryMobile = ({ id }) => {
  return (
    <GalleryPhotos id={id}>
      <GalleryComponent>
      <Gallery image="/images/photoGallery2.png" width="318px" height="222px" />
       </GalleryComponent>
      <GalleryComponent>
      <Gallery image="/images/photoGallery5.jpeg" width="318px" height="222px" />
      </GalleryComponent>
      <GalleryComponent>
      <Gallery image="/images/photoGallery6.jpeg" width="318px" height="222px" />
    </GalleryComponent>
    
    </GalleryPhotos>
  )
}

export default GalleryMobile; 

