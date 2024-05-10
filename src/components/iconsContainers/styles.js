import styled from 'styled-components'

export const Container = styled.div`
  border: solid 0.5px ${({ theme }) => theme.colors.text};
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  display: flex;
  height: 70px;
  width: 70px;
`
