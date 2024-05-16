import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  justify-content: space-around;
  background-position: center;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  flex-direction: row;
  align-items: center;
  display: flex;
  height: ${({ height }) => height}; 
  width: ${({ width }) => width};

`;
