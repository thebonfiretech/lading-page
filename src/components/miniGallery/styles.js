import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 820px;
  width: 100%;

`;

export const GalleryContainer = styled.div`
  flex-direction: column; 
  align-items: center;
  gap: 18px;
  display: flex;
  width:100%;
  height: 70vh;
`

export const GalleryPhotos = styled.div`
  display: flex;
  gap: 18px;
  width: 80%;
  
  @media (max-width: 820px) {
    display: none;
  }
`;

export const GalleryPhotos2 = styled.div`
   flex-direction: row-reverse;
   display: flex;
   width: 80%;
   gap: 18px;

@media (max-width: 820px) {
  display: none;
}
`;
