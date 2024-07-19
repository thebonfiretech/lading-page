import styled from 'styled-components';

export const Container = styled.h1`
    border-image-source: linear-gradient(100deg, #0139FE 0%, #0697C5 50%, #00FFB2 100%);
      background-image: ${({gradient}) => gradient ? gradient : "linear-gradient(100deg,  #0139FE 0%, #00FFB2 100%, #0697C5 50%)"} ;
      -webkit-text-fill-color: transparent;
      font-size: ${({size}) => size}; 
      -webkit-background-clip: text;
      border-image-slice: 1;
      background-clip: text;
      width:  ${({width}) => width};

      @media (max-width: 820px) {
       text-align: center;
       font-size: 1.8rem;
       width: 80%;
      }
`
//91deg, #0139FE 13%, #029ECF 100%