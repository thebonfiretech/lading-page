import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 820px;
  width: 100%;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70vh;
  gap: 18px;
`;

export const GalleryPhotos = styled.div`
  justify-content: center;
  display: flex;
  gap: 18px;
  width: 80%;

  @media (max-width: 820px) {
    display: none;
  }
`;

export const GalleryPhotos2 = styled.div`
  display: flex;
  flex-direction: row-reverse; 
  justify-content: center;
  width: 80%;
  gap: 18px;

  @media (max-width: 820px) {
    display: none;
  }
`;
