import styled, { css } from 'styled-components';


export const Container = styled.div`
  position: relative;
  margin: 0 auto; 
  height: 40%; 
  width: 100%; 
  z-index: 5;

  opacity: 0;
  pointer-events: none;

  & svg {
    padding: 10px;
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 10;
  }

  & nav {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: ${({ theme }) => theme.colors.secondaryBackground};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 50px 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 9;
  }

  & nav a {
    text-decoration: none;
  }

  & nav div{
    margin-top: 25px;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      pointer-events: auto;
      opacity: 1;
    `}
`
