import styled from 'styled-components'

export const Container = styled.div`
    background:  ${({ theme }) => theme.colors.secondaryBackground};
    grid-template-columns: 1fr 1fr;
    align-items: center;
    display: grid;
    height: 70vh;
    width: 100%;

    & img{
      height: 55vh;
    }

    & div{
      flex-direction: column;
      align-items: center;
      display: flex;
    }
`
