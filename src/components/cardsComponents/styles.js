import styled from 'styled-components';

export const Container = styled.div`
   background-color:  ${({ theme }) => theme.colors.        secondaryBackground};
   flex-direction: row;
   align-items: center;
   display: flex;
   height: 160px;
   width: 160px;
`;

export const ElementsContainer = styled.div `
   color:  ${({ theme }) => theme.colors.text};
   justify-content: center;
   flex-direction: column;
   align-items: center;
   display: flex;
   width: 100%;
   gap: 15px;
`

