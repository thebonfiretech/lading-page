import styled from 'styled-components';

export const Container = styled.div`
   background:  ${({ theme }) => theme.colors. gradient};
   color:  ${({ theme }) => theme.colors.text};
   justify-content: center;
   border-radius: 15px;
   align-items: center;
   cursor: pointer;
   display: flex;
   height: 4vh;
   width: 10vw;

   @media (max-width: 820px) {
   height: 5vh;
   width: 30vw;
   
    }
`;
