                import React from 'react';
                import { AiOutlineClose } from "react-icons/ai";
                import { useNavigate } from "react-router-dom";
                import { Container, Box, Position, Message, Icon, Button } from './styles';

                const Error = () => {
                    const navigate = useNavigate();

                    const cameBack = () => {
                        navigate('/')
                    }
                    return (
                        <Container>
                            <Box>
                                <Position rotate="15deg" margin="60%">
                                    <Icon>
                                        <AiOutlineClose size={30} color='#fff'/>
                                    </Icon>
                                </Position>
                                <h1>Oops!</h1>
                                <Message>
                                    <Position rotate="-33deg" margin="-20%">
                                        <Icon>
                                            <AiOutlineClose size={30} color='#fff'/>
                                        </Icon>
                                    </Position>
                                    <p>Algo deu errado</p>
                                </Message>
                                <Button onClick={cameBack}>
                                    TENTE NOVAMENTE
                                </Button>
                                <Position rotate="-20deg" margin="100%" top="-85px" mobileMargin="95%">
                                    <Icon>
                                        <AiOutlineClose size={30} color='#fff'/>
                                    </Icon>
                                </Position>
                            </Box>
                        </Container>
                    );
                }

                export default Error;
