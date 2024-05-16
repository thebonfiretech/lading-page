import React, {useState}  from 'react'

import { Container, LogoArea, NavigationArea } from './styles'
	
import {MdOutlineSegment} from 'react-icons/md'

import Button from '../button'


const Navbar = (props) => {

	return (
		<Container>
			<LogoArea>
				<img src='../../public/images/logo.svg' alt="Logo"/>
				<p>bonfire</p>
			</LogoArea>
			 <NavigationArea>
				<a href="#about" onClick={props.scrollToAbout}>sobre</a>
				<a href="#products" onClick={props.scrollToProducts}>produtos</a>
				<a href="#team" onClick={props.scrollToTeam}>equipe</a> 
				 <a href="#gallery" onClick={props.scrollToGallery}>galeria</a>
			</NavigationArea>
			<div className='buttonMobile'>
				<Button title="Contato" onAction={props.scrollToContacts} />
				</div>
			  <MdOutlineSegment 
					 color='#eeeeee'
					size={35}
					onClick={() => props.setMenuIsVisible(true)}
					/>
		</Container>
	);
}

export default Navbar;

