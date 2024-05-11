import styled from 'styled-components'

export const Container = styled.div`
  color:  ${({ theme }) => theme.colors.text};
  padding: 30px 0 0 0;
  letter-spacing: 3px;
  line-height: 1.3rem;
  flex-wrap: wrap;
  display: flex;
  height: auto;
  width:75%;
`
