import React from 'react';
import { GalleryPhotos, GalleryComponent } from './styles.js';
import Gallery from '../gallery'; 

const GalleryMobile = ({ id }) => {
  return (
    <GalleryPhotos id={id}>
      <GalleryComponent>
      <Gallery width="154px" height="222px"/>
      <Gallery width="154px" height="222px"/>
       </GalleryComponent>
      <GalleryComponent>
      <Gallery width="318px" height="222px" />
      </GalleryComponent>
      <GalleryComponent>
      <Gallery width="154px" height="222px"/>
      <Gallery width="154px" height="222px" />
    </GalleryComponent>
    </GalleryPhotos>
  )
}

export default GalleryMobile; 

