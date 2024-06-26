import styled from 'styled-components'

export const Container = styled.div`
    background:  ${({ theme }) => theme.colors.secondaryBackground};
    grid-template-columns: 1fr 1fr;
    /* align-items: center; */
    display: grid;
    height: 820px;
    width: 100%;

    & img{
      height: 538px;
    }

    & div{
      justify-content: center;
      flex-direction: column;
      align-content: center;
      align-items: center;
      display: flex;
      widht: 100%;
    }

    @media (max-width: 820px) {
      grid-template-columns: 1fr;
      grid-template-row: 1fr 1fr;
      min-height: 100vh;
      height: auto;

      & div{
         align-items: center;
      }

      & img{
        height: 40vh;
      }

    }
`
export const Align = styled.div`
 width: 95%;

 @media (max-width: 820px) {
   width: 100%;
 }

`