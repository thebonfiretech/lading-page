import styled from 'styled-components';

export const Container = styled.h1`
    border-image-source: linear-gradient(100deg, #0139FE 0%, #029ECF 47%, #00FFB2 100%);
      background-image: linear-gradient(100deg, #0139FE 0%, #029ECF 47%, #00FFB2 100%);
      -webkit-text-fill-color: transparent;
      font-size: ${({size}) => size}; 
      -webkit-background-clip: text;
      border-image-slice: 1;
      background-clip: text;
`
