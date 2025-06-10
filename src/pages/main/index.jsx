 import React, {useState}  from 'react'

import { Container } from './styles'

import MiniGallery from '../../components/miniGallery'
import MenuMobile from '../../components/menuMobile'
import Products from '../../components/products'
import Contacts from '../../components/contacts'
import Navbar from '../../components/navbar'
import About from '../../components/about'
import Home from '../../components/home'
import Team from '../../components/team'

const Main = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  
  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTeam = () => {
    document.querySelector("#team").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContacts = () => {
        document.querySelector("#contacts").scrollIntoView({ behavior: "smooth" });
      };

  return (
    <Container>
      <MenuMobile 
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar 
        scrollToAbout={scrollToAbout} 
        scrollToProducts={scrollToProducts} 
        scrollToTeam={scrollToTeam} 
        scrollToContacts={scrollToContacts} 
        setMenuIsVisible={setMenuIsVisible}
      />
      <Home id="home" />
      <About id="about" />
      <Products id="products" />
      <Team id="team"/>
      <MiniGallery id="gallery" />
      <Contacts id="contacts"/>
    </Container>
  );
}

export default Main;
