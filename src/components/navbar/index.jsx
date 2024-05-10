import React from 'react';

import { Container, LogoArea,  NavigationArea } from './styles';

import Button from '../button';

const Navbar = () => {

return (
			<Container>
			    <LogoArea>
					    <img src='../../public/images/logo.svg'></img>
						  <p>bonfire</p>
					</LogoArea>
          < NavigationArea>
					    <p>sobre</p>
						  <p>produtos</p>
							<p>equipe</p>  
					</NavigationArea>
				  <Button title="Contato"/>
				
			</Container>
	)

}

export default Navbar

