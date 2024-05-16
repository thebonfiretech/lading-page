import styled from 'styled-components';

export const Container = styled.div`
   background-color:  ${({ theme }) => theme.colors.        secondaryBackground};
   flex-direction: row;
   align-items: center;
   display: flex;
   height: 160px;
   width: 160px;

   @media (max-width: 820px) {
       height: 125px;
       width: 125px;

     }
`;

export const ElementsContainer = styled.div `
   color:  ${({ theme }) => theme.colors.text};
   justify-content: center;
   flex-direction: column;
   align-items: center;
   text-align: center;
   display: flex;
   width: 100%;
   gap: 15px;
`

