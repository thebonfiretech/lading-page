import styled from 'styled-components'

export const Container = styled.div`
flex-direction: column;
display: flex;
gap: 10px;
width: 100%;
`

export const Box = styled.input`
color: ${({theme }) => theme.colors.secondaryText};
background-color: ${({theme }) => theme.colors.background};
box-sizing: border-box;
border-radius: 2px;
padding: 0 20px;
outline: none;
border: none;
height: 50px;
width: 100%;

`