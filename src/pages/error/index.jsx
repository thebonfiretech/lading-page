
import React from 'react';
import { Container, Box, Informations, Button } from './styles';
import Logo from '/images/logo.svg'

const Error = () => {
    const redirect = () => {
        window.location.href = '/'; 
    };

    return (
        <Container>
            <Box>
                <h1>4</h1>
                <img src={Logo} width='300px' alt="Logo" />
                <h1>4</h1>
            </Box>
            <Informations>
                <p>Página não encontrada :(</p>
                <Button onClick={redirect}>
                    Voltar para tela inicial
                </Button>
            </Informations>
        </Container>
    );
}

export default Error;
