import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.secondaryBackground};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 820px;
    gap: 81px;

    @media (max-width: 820px) {
      min-height: 120vh;
      height: auto;
    }
`;

export const MembersContainer = styled.div`
   grid-template-rows: repeat(2, 1fr); 
   grid-template-columns: 1fr 1fr;
   justify-items: center;
   display: grid;
   gap: 29px;
   width: 100%;
   height: auto; 

   @media (max-width: 820px) {
     grid-template-columns: 1fr;
     grid-template-row: repeat(4, 1fr);
   }
`;
