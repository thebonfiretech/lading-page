import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  overflow: hidden;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;
