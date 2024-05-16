import styled from 'styled-components';

export const GalleryPhotos = styled.div`
  display: none; 

  @media (max-width: 820px) {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    gap: 10px;
  }
`;

export const GalleryComponent = styled.div`
  display: none; 

  @media (max-width: 820px) {
    justify-content: center;
    display: flex; 
    flex-direction: row;
    width: 100%;
    gap: 10px;
  }
`;

