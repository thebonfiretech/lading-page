import styled from 'styled-components'

export const Container = styled.div`
    background:  ${({ theme }) => theme.colors.background};
    flex-direction: column;
    align-items: center;
    display: flex;
    height: 70vh;
    width: 100%;
`

export const IconsArea = styled.div`
   display: flex;
   gap: 25px;
`

export const TitleArea = styled.div`
   align-items: center;
   justify
   width: 50%;
   display: flex;
`