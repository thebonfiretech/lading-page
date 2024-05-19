import React from 'react'
import { useNavigate } from 'react-router-dom'

import {Container} from './styles.js'
import {MdClear} from 'react-icons/md'

import Button from '../button'

const MenuMobile = ({menuIsVisible, setMenuIsVisible, scrollToAbout, scrollToProducts, scrollToGallery, scrollToTeam, scrollToContacts }) =>{

  const navigate = useNavigate()

  function navigateLink(){
     navigate('/links')
  }
  
  return(
    <Container isVisible = {menuIsVisible}>
      <MdClear color='#eeeeee' size={35} onClick={() => setMenuIsVisible(false)}/>
      <nav>
        <a href="#about" onClick={scrollToAbout}>Sobre</a>
        <a href="#products" onClick={scrollToProducts}>Produtos</a>
        <a href="#team" onClick={scrollToTeam}>Equipe</a> 
         <a href="#gallery" onClick={scrollToGallery}>Galeria</a>
         <a href="#links" onClick={navigateLink}>Linktree</a>
        <div>
        <Button title="Contato" onAction={scrollToContacts} />
        </div>
      </nav>
    </Container>
  )
}

export default MenuMobile