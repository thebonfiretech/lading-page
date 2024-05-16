import React from "react"

import ButtonLinks from "../../components/buttonLink"
import { AiFillBehanceSquare, AiFillGithub } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import Contacts from '../../components/contacts'
import CameBack from '../../components/cameBack'
import Text from '../../components/text'

import { Container, ButtonArea, Footer } from './styles'

const Linktree = () => {

  const links = [
    {
      icone: <FaTiktok/>,
      title: "TikTok",
      link: ""
    },
    {
      icone: <AiFillBehanceSquare/>,
      title: "Behance",
      link: ""
    },
    {
      icone: <AiFillGithub/>,
      title: "GitHub",
      link: ""
    },
    
]
  return(
    <Container>
      <CameBack/>
     <img src='../../public/images/logo.svg' alt="Logo"/> 
      <Text text="Explore nosso portfólio e redes sociais e descubra como transformamos ideias em soluções digitais criativas, inovadoras e de alta qualidade." width="70%"/>
     <ButtonArea>
      {links.map((links, index) => (
        <ButtonLinks Icone={links.icone} title={links.title}/>
      ))}
       </ButtonArea> 
      <Footer>
         <Contacts/>
      </Footer>
   
    </Container>
  )
}

export default Linktree