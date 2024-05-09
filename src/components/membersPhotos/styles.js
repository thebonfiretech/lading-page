import styled from 'styled-components';

export const Container = styled.div`
   background-image: url(${({photo}) => photo});
   background-repeat: no-repeat;
   justify-content: space-around;
   background-position: center;
   background-size: cover;
   background-color: red;
   flex-direction: row;
   align-items: center;
   border-radius: 50%;
   display: flex;
   height: 160px;
   width: 160px;
`;
