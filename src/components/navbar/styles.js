import styled from 'styled-components'

export const Container = styled.div`
  justify-content: space-between;
  padding: 0 40px 0 40px;
  display: flex;
  height: 4vh;
  width:100%;
`

export const LogoArea = styled.div`
  align-items: center;
  display: flex;

  & img{
    height: 6vh;
  }

  & p{
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
`

export const NavigationArea = styled.div`
   align-items: center;
   display: flex;
   gap: 30px;

   & p{
    text-transform: capitalize;
    font-weight: 400;
    font-size: 12px;
     cursor: pointer;
   }
`