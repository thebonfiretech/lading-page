import styled from 'styled-components';

export const Container = styled.button`
      color:  ${({ theme }) => theme.colors.primary};
      background: transparent;
      flex-direction: column;
      margin: 0 0 20px 0;
      align-items: center;
      font-size: 15px; 
      cursor: pointer;
      display: flex;
      border: none;
`
