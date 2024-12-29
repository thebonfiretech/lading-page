import React from "react"
import { Container, Box } from './styles.js';

const TextArea = ({ placeholder, onAction, value}) => {
    return(
        <Container>
            <Box
              placeholder={placeholder}
              OnChange={(e) => onAction(e.target.value)}
              value={value}
            />
        </Container>
    )
}

export default TextArea;