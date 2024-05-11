import React from 'react'

import { Container } from './styles.js'

import Text from '../text'
import Title from '../title'

const About = () => {
  return(
     <Container>
       <div>
          <img src='../../public/images/mockup.svg'/>
       </div>
       <div>
         <Title title="O que é o Bonfire?" size="48px"/>
         <Text text="ewdkldkldkek ekdkjekkde edkldekkdo dejdkekdk ejkdekd emdkekd dkejkdmk dekdlke ekdlkel"/>
       </div>
     
     </Container>
  )
    
}

export default About