import React from 'react'
import IconsContainers from '../iconsContainers'
import DownButton from '../downButton'
import Title from '../title'
import { Container, IconsArea, InicialArea, DownButtonContainer } from './styles.js'
import { MdOutlineLightbulb, MdSchool, MdVerified } from 'react-icons/md'

const Home = () => {
  return (
    <Container>
      <InicialArea>
          <Title title="Tecnologia, Inovação, Aprendizado e Qualidade no mesmo lugar." size="48px"  width="50%"/>
        <IconsArea>
          <IconsContainers Icon={MdOutlineLightbulb} />
          <IconsContainers Icon={MdSchool} />
          <IconsContainers Icon={MdVerified} />
        </IconsArea>
      </InicialArea>
      <DownButtonContainer>
      </DownButtonContainer>
    </Container>
  )
}

export default Home
