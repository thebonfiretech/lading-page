import React from 'react'

import IconsContainers from '../iconsContainers'
import DownButton from '../downButton'
import Navbar from '../navbar'
import Title from '../title'

import { Container, IconsArea, TitleArea } from './styles.js'
import { MdOutlineLightbulb, MdSchool, MdVerified } from 'react-icons/md'

const Home = () => {
  return (
    <Container>
      <TitleArea>
         <Title title="Tecnologia, Inovação, Aprendizado e Qualidade no mesmo lugar." size="40px" />
        </TitleArea>
      <IconsArea>
         <IconsContainers Icon={MdOutlineLightbulb} />
         <IconsContainers Icon={MdSchool} />
         <IconsContainers Icon={MdVerified} />
      </IconsArea>
         <DownButton />
     
    </Container>
  )
}

export default Home
