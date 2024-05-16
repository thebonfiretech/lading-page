import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 820px;
    min-height: 100vh;
    display: flex;
    width: 100%;
`

export const ImgArea = styled.div`
    background:  ${({ theme }) => theme.colors.secondaryBackground};
    border: solid  ${({ theme }) => theme.colors.text} 2px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    
   & img{
       height: 15vh;
       width: 15vw;
   }

   @media (max-width: 820px) {
        height: 100px;
        width: 100px;

       & img{
              height: 139px;
              width: 108px;
          }
   }
`

export const ButtonArea = styled.div`
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    display: flex;
    flex-grow: 1;
    gap: 30px;
`

export const Footer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  margin-top: auto; 
  flex-shrink: 0; 
    `

