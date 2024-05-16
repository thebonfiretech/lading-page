import styled from 'styled-components'

export const Container = styled.div`
   justify-content: space-around;
   align-items: center;  
   position: relative;
   display: flex;
`;

export const Circle = styled.div`
   background-image: url(${({ photo }) => photo});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   border-radius: 50%;
   height: 200px;
   width: 200px;

   @media (max-width: 820px) {
      height: 137px;
      width: 137px;
   }
`;

export const TextContainer = styled.div`
   margin-left: 20px;
   height: 90px; 
   widht: 130px; 
   display: flex;
   flex-direction: column;
   justify-content: center;

   @media (max-width: 820px) {
       margin-left: 15px;
   }
`;

export const Name = styled.p`
   font-size: 18px;
   font-weight: 600;
   margin: 0;
`;

export const Position = styled.p`
   padding-top: 5px;
   font-size: 12px;
`;
