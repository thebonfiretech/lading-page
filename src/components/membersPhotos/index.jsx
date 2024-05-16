import React from "react"
import { Container, Circle, TextContainer, Name, Position } from './styles.js'

const MembersPhotos = ({ photo, name, position}) => {
   const positionsArray = position.split(";")

   return (
      <Container>
         <Circle photo={photo} />
         <TextContainer>
            <Name>{name}</Name>
            {positionsArray.map((pos, index) => (
               <Position key={index}>{pos.trim()}</Position>
            ))}
         </TextContainer>
      </Container>
   );
}

export default MembersPhotos;
