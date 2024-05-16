import styled from 'styled-components';

export const Container = styled.div`
   background:  ${({ theme }) => theme.colors.primary};
   color:  ${({ theme }) => theme.colors.text};
   justify-content: center;
   border-radius: 15px;
   align-items: center;
   font-weight: 600;
   cursor: pointer;
   display: flex;
   height: 63px;
   width: 550px;

   & svg{
      font-size: 24px;
   }

   @media (max-width: 820px) {
   height: 61px;
   width: 338px;
    }
`;

export const InformationArea = styled.div`
  color: ${({theme}) => theme.colors.textSecondary};
   align-items: center;
  display: flex;
  gap: 11px;
`
