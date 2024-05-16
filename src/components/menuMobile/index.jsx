import React from 'react'

import {Container} from './styles.js'
import {MdClear} from 'react-icons/md'

import Button from '../button'

const MenuMobile = ({menuIsVisible, setMenuIsVisible, scrollToAbout, scrollToProducts, scrollToGallery, scrollToTeam, scrollToContacts }) =>{
  return(
    <Container isVisible = {menuIsVisible}>
      <MdClear color='#eeeeee' size={35} onClick={() => setMenuIsVisible(false)}/>
      <nav>
        <a href="#about" onClick={scrollToAbout}>sobre</a>
        <a href="#products" onClick={scrollToProducts}>produtos</a>
        <a href="#team" onClick={scrollToTeam}>equipe</a> 
         <a href="#gallery" onClick={scrollToGallery}>galeria</a>
        <div>
        <Button title="Contato" onAction={scrollToContacts} />
        </div>
      </nav>
    </Container>
  )
}

export default MenuMobile