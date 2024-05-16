import styled from 'styled-components'

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow-x: hidden;
    display: flex;
    height: 820px;
    width: 100%;
`

export const IconsArea = styled.div`
   gap: 25px;
   display: flex;
`

export const InicialArea = styled.div`
   flex-direction: column;
   justify-content: center;
   align-items: center;
   display: flex;
   margin: auto;
   width: 100%;
   gap: 20px;
   flex: 1;

   @media (max-width: 820px) 
     align-items: center;
      display: flex;
    }
`

export const DownButtonContainer = styled.div`
  margin-top: auto; 
`
