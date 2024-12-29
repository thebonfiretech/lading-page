import React from "react"
import { Container, Box } from './styles.js';

const Input = ({type, placeholder, onAction, value}) => {
    return(
        <Container>
            <Box
              type={type}
              placeholder={placeholder}
              OnChange={(e) => onAction(e.target.value)}
              value={value}
            />
        </Container>
    )
}

export default Input;