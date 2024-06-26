import {MdOutlineSegment, MdInsertLink} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import { Container, LogoArea, NavigationArea } from './styles'
import logo from '../../../public/images/logo.svg'
	

import Button from '../button'


const Navbar = (props) => {
	const navigate = useNavigate()

	function navigateLink(){
		 navigate('/links')
	}

	return (
		<Container>
			<LogoArea>
				<img src={logo} alt="Logo"/>
				<p>bonfire</p>
			</LogoArea>
			 <NavigationArea>
				<a href="#about" onClick={props.scrollToAbout}>sobre</a>
				<a href="#products" onClick={props.scrollToProducts}>produtos</a>
				<a href="#team" onClick={props.scrollToTeam}>equipe</a> 
				 <a href="#gallery" onClick={props.scrollToGallery}>galeria</a>
			</NavigationArea>
			<div className='buttonMobile'>
				<MdInsertLink
					className='link'
					color='#eeeeee'
					size={35}
					onClick={navigateLink}
					/>
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

