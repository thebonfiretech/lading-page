import styled from 'styled-components';

export const Container = styled.button`
      color:  ${({ theme }) => theme.colors.primary};
      background: transparent;
      flex-direction: column;
      align-items: center;
      font-size: 13px; 
      cursor: pointer;
      display: flex;
      border: none;
`
