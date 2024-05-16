import styled from 'styled-components'

export const Container = styled.div`
   background: ${({ theme }) => theme.colors.background};
    display: grid;
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
    align-items: center;
    height: 820px;
    padding: 20px;
    width: 100%;

    @media (max-width: 820px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        height: auto;
    }
`

export const TextContainer = styled.div`
     justify-content: center;
     align-items: center;
     display: flex;
     width: 100%;
`;

export const TextArea = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 85%;
  
  @media (max-width: 820px) {
       width: 100%; 
  }
`

export const Value = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 50%;
  gap: 10px;
`

export const Grid = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    width: 100%; 

    @media (max-width: 820px) {
        justify-content: center;
        width: 100%;
    }
`
