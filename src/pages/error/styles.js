import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`

export const Box = styled.div`
     flex-direction: row;
     display: flex;
     gap: 8px;

    &>h1{
      font-size: 45vh;
    }

    @media (max-width: 820px) {
      gap: 2px;
      &>h1{
        font-size: 10rem;
      }

      &>img{
        width:170px
      }

    }
`

export const Informations = styled.div`
   text-transform: capitalize;
   flex-direction: column;
   padding-top: 40px;
   text-align:center;
   display: flex;

  &>p{
    font-size: 1.2rem;
  }

  &>Button{
    margin-top:25px;
  }

  @media (max-width: 820px) {
     padding-top: 80px;

    &>p{
      font-size: 1rem;
    }

  }

`

export const Button = styled.button`
border-image-source: linear-gradient(91deg, #024FF0 0.52%, #0499C8 100%);
    background-image: linear-gradient(91deg, #024FF0 0.52%, #0499C8 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    border-image-slice: 1;
    background-clip: text;
    border-style: solid;
    border-width: 2px;
    cursor: pointer;
    width: 15vw;
    height: 8vh;
`